import React from "react";
import {
  Box,
  Text,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "next/link";
import styles from "./header.module.css";
import { RiHome3Fill } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { IoGrid } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = (props) => {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");

  return (
    <nav id={styles.nav}>
      <div id={styles.logo}>
        <Text
          bgGradient="linear(to-tl, #283c86,#45a247)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Brand Name&nbsp;
        </Text>
      </div>
      <div>
        {isLargerThan750 ? (
          <ul id={styles.ul}>
            <li id={styles.li}>
              <a id={styles.a} href="#1">
                <span id={styles.span1}>
                  <RiHome3Fill id={styles.icon1} fill="#159957" /> Home
                </span>
              </a>
            </li>
            <li id={styles.li}>
              <a id={styles.a} href="#2">
                <span id={styles.span1}>
                  <ImBooks id={styles.icon1} fill="#155799" /> About
                </span>
              </a>
            </li>
            <li id={styles.li}>
              <a id={styles.a} href="#3">
                <span id={styles.span1}>
                  <IoGrid id={styles.icon1} fill="#EB5757" /> Portfolio
                </span>
              </a>
            </li>
            <li id={styles.li}>
              <a id={styles.a} href="#4">
                <span id={styles.span1}>
                  <IoMdText id={styles.icon1} fill="#FF8235" /> Contact
                </span>
              </a>
            </li>
          </ul>
        ) : (
          <div className="menu">
            <Menu>
              <MenuButton as={Text}>
                <GiHamburgerMenu fill="#45a247" className="icon2" />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <a id={styles.a} href="#1">
                    <span id={styles.span1}>
                      <RiHome3Fill id={styles.icon1} fill="#159957" /> Home
                    </span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a id={styles.a} href="#2">
                    <span id={styles.span1}>
                      <ImBooks id={styles.icon1} fill="#155799" /> About
                    </span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a id={styles.a} href="#3">
                    <span id={styles.span1}>
                      <IoGrid id={styles.icon1} fill="#EB5757" /> Portfolio
                    </span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a id={styles.a} href="#4">
                    <span id={styles.span1}>
                      <IoMdText id={styles.icon1} fill="#FF8235" /> Contact
                    </span>
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
