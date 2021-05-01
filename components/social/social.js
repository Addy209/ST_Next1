import React from "react";
import styles from "./social.module.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { Wrap, WrapItem, Center, Link, useMediaQuery } from "@chakra-ui/react";
import { Links } from "./links";

const Social = () => {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");
  return (
    <div id={styles.social} className="margin_div">
      <Wrap spacing="1.7em">
        <Links src={process.env.FACEBOOK}>
          <FaFacebook id={styles.icon} />
        </Links>

        <Links src={`https://instagram.com/`}>
          <FaInstagramSquare id={styles.icon} />
        </Links>

        <Links src={`https://twitter.com/`}>
          <FaTwitter id={styles.icon} />
        </Links>

        <Links src={`https://linkedin.com/`}>
          <FaLinkedin id={styles.icon} />
        </Links>

        <Links src={`https://github.com/`}>
          <FaGithub id={styles.icon} />
        </Links>
      </Wrap>
    </div>
  );
};

export default Social;
