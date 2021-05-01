import React, { useState, useEffect } from "react"; // requires a loader
import {
  Box,
  AspectRatio,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import styles from "./header/header.module.css";
import { Carousel } from "react-bootstrap";
import dynamic from "next/dynamic";
import Image from 'next/image'

const LazyImg = dynamic(() => import("./lazyimg"));

const MainCarousel = () => {
  const [isLargerThan500] = useMediaQuery("(max-width: 500px)");
  console.log(isLargerThan500);

  const [ratio, setRatio] = useState();
  useEffect(() => {
    if (isLargerThan500) {
      setRatio(1);
    } else {
      setRatio(2.27);
    }
    console.log("test");
  }, [isLargerThan500]);
  const data = [
    {
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      head: "Example Head 1",
      subhead: "Example Sub Head 1",
    },
    {
      image:
        "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      head: "Example Head 2",
      subhead: "Example Sub Head 2",
    },
    {
      image:
        "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      head: "Example Head 3",
      subhead: "Example Sub Head 3",
    },
  ];

  return (
    <div id="1" className={styles.car_div}>
      <Carousel>
        <Carousel.Item>
          <AspectRatio maxW="100%" ratio={ratio}>
            <Image className={styles.img} layout="fill" src={data[0].image} alt="First slide" />
          </AspectRatio>
          <Carousel.Caption id={styles.caption}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AspectRatio maxW="100%" ratio={ratio}>
            <LazyImg
              style={styles.img}
              data={data[1].image}
              alt="Second slide"
            />
          </AspectRatio>
          <Carousel.Caption id={styles.caption}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AspectRatio maxW="100%" ratio={ratio}>
            <LazyImg
              style={styles.img}
              data={data[2].image}
              alt="Third slide"
            />
          </AspectRatio>
          <Carousel.Caption id={styles.caption}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default MainCarousel;
