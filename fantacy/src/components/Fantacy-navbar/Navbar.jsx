import React from "react";
import { Box, Avatar, Image, Text } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { Auth, isAuth } = React.useContext(AuthContext);
  const handlelogout = () => {
    // alert("You are Logout")
    Swal.fire({
      icon: "info",
      title: "Logout Successfull",
      text: "Thank you",
    });
    isAuth(() => false);
  };
  return (
    <Box w="100%">
      <Box
        backgroundColor="#5217b0"
        maxHeight="60px"
        padding="12px 15px"
        zIndex="1"
        display="flex"
        w="100%"
      >
        <Avatar size="sm" src="https://bit.ly/broken-link" />
        <Text
          fontFamily="mono"
          fontSize="xl"
          fontWeight="bold"
          color="white"
          ml="35%"
        >
          Fantacy App
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;
