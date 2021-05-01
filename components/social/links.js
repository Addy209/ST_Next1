import React from "react";
import {
  Wrap,
  WrapItem,
  Center,
  Link,
  useMediaQuery,
  propNames,
} from "@chakra-ui/react";

export const Links = (props) => {
  return (
    <WrapItem>
      <Center>
        <Link href={props.src} target="_blank">
          {props.children}
        </Link>
      </Center>
    </WrapItem>
  );
};
