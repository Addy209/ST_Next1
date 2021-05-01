import React, { useState, useEffect } from "react";
import {
  Stack,
  Input,
  HStack,
  VStack,
  Button,
  Box,
  Heading,
  Text,
  useMediaQuery,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsPersonCheckFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { useToast, Progress } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Maps = dynamic(() => import("./map"), { loading: () => <p>...</p> });

const Contact = () => {
  const toast = useToast();
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");
  const [contactform, setContactForm] = useState({
    name: "",
    email: "",
    visible: true,
  });
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(0);

  const handleFormFill = (e, i) => {
    if (i == 0) {
      setContactForm((formdata) => {
        const form = { ...formdata };
        form.name = e.target.value;
        return form;
      });
    } else {
      setContactForm((formdata) => {
        const form = { ...formdata };
        form.email = e.target.value;
        return form;
      });
    }
  };

  const checkandsubmit = (name, email) => {
    console.log("name.length");
    if (name == "" || name == null) {
      toast({
        title: "Name is Required",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (name.length < 3) {
      toast({
        title: "We don't accept alphabets as Name",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (email == "" || email == null) {
      toast({
        title: "Email is Required",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const e_patt = new RegExp(
      "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$"
    );
    if (!e_patt.test(email)) {
      toast({
        title: "Email Not Correct",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    setContactForm({
      name: name,
      email: email,
      visible: false,
    });
  };

  const data = (
    <>
      <div className="contact">
        <Stack spacing={4}>
          <div className="fillform">
            <Heading
              as="h1"
              size="xl"
              bgGradient="linear(to-r,#7928CA, #FF0080)"
              bgClip="text"
            >
              Fill The Form
            </Heading>
          </div>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsPersonCheckFill fill="blue" />}
            />
            <Input
              type="text"
              onChange={(event) => handleFormFill(event, 0)}
              value={contactform.name}
              placeholder="Name"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<SiMinutemailer fill="green" />}
            />
            <Input
              type="email"
              onChange={(event) => handleFormFill(event, 1)}
              value={contactform.email}
              placeholder="E-mail"
            />
          </InputGroup>
          <Button
            p={4}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            onClick={() => checkandsubmit(contactform.name, contactform.email)}
            bgGradient="linear(to-r,#7928CA, #FF0080)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            Submit
          </Button>
        </Stack>
      </div>
    </>
  );

  useEffect(async () => {
    if (duration == 100) {
      if (loading) {
        setLoading(false);
      }
    }
    if (loading) {
      async function myFunc() {
        await new Promise((resolve) => {
          setTimeout(() => {
            setDuration((dur) => {
              return dur + 1;
            });
          }, 10);
        });
      }
      myFunc();
    }
  });

  return (
    <div id="4" className="margin_div">
      <Heading
        as="h2"
        size="2xl"
        bgGradient="linear(to-r,#7928CA, #FF0080)"
        bgClip="text"
      >
        Contact Us
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        accumsan diam eget vestibulum lobortis. Curabitur non convallis risus,
        sed sollicitudin ante. Maecenas risus odio, faucibus et tempus et,
        ultricies dignissim neque. Fusce a nulla nulla. Mauris interdum sagittis
        sapien a ornare. Phasellus condimentum iaculis orci, auctor ultricies
        diam iaculis in. Donec id nunc enim.
      </Text>

      <VStack style={{ marginTop: "2%" }} spacing={2}>
        <Box w="100%" h="50vh">
          <Maps />
        </Box>

        {loading ? (
          <Box w="100%" h="10vh">
            <Progress height="32px" value={duration} />
          </Box>
        ) : contactform.visible ? (
          <Box w="100%" h="50vh">
            {data}
          </Box>
        ) : (
          <Box w="100%" h="10vh">
            <Alert status="success">
              <AlertIcon />
              Your Data has been recorded. We will contact you shortly.
            </Alert>
          </Box>
        )}
      </VStack>
    </div>
  );
};

export default Contact;
