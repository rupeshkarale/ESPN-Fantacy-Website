
import React from 'react'
import { Box,Avatar,Image } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const Navbar = () => {
  const { Auth ,isAuth} = React.useContext(AuthContext);
  const handlelogout = () => {
    alert("You are Logout")
    isAuth(() => false);
  }
    return (
      <Box>
        <Box
          borderRadius="base"
          backgroundColor="#5217b0"
          maxHeight="60px"
          padding="12px 15px"
          pos="fixed"
          zIndex="1"
          top="0px"
          display="flex"
          w="40%"
        >
          <Avatar size="sm" src="https://bit.ly/broken-link" />
          <Image
            ml="30%"
            h="5"
            w="50"
            src="https://espn.wonderwins.com/assets/images/header_logo.png"
          ></Image>
        </Box>
        <Box>
          <Tabs
            p="-1px 16px"
            pos="fixed"
            w="40%"
            // height={"45px"}
            zIndex="modal"
            bottom="0%"
          >
            <TabList
              // h="16"
              // w="100%"
              display="flex"
              justifyContent="space-between"
              alignItems={"center"}
              bg="ButtonFace"
            >
              <Link to="/">
                <Tab
                  as="button"
                  w="32"
                  colorScheme="purple"
                  _selected={{ color: "white", bg: "Purple" }}
                  onClick={Auth ? handlelogout : null}
                >
                  {Auth ? "LOGOUT" : "SIGNUP"}
                </Tab>
              </Link>
              <Link to="/matches">
                <Tab
                  as="button"
                  w="32"
                  _selected={{ color: "white", bg: "Purple" }}
                >
                  HOME
                </Tab>
              </Link>
              <Link to="/mycontest">
                <Tab
                  as="button"
                  w="38"
                  _selected={{ color: "white", bg: "Purple" }}
                >
                  MY CONTEST
                </Tab>
              </Link>
            </TabList>
          </Tabs>
        </Box>
      </Box>
    );
}

export default Navbar