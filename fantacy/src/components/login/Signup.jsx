import React from "react";
import { Box, Text, Input, Heading, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { API_URL } from "../../utils/constant";
const init = {
  name: "",
  email: "",
  pass: "",
};

const Signup = () => {
  const [form, setform] = React.useState(init);
  const navigate = useNavigate();

  const inputfn = (e) => {
    const { value, name } = e.target;
    setform((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const signupfn = async () => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.email,
          password: form.pass,
          name: form.name,
        }),
      });

      if (response.status !== 201) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }
      Swal.fire({
        icon: "success",
        title: "Signup Successful",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message || "Unknown error occurred",
      });
    }
  };

  return (
    <Box mt="20" w="100%">
      <Box gap="5" display="flex" alignItems="center" flexDirection="column">
        <Heading>Sign up</Heading>
        <Text mt="-2" mb="5">
          Please Enter Your Details
        </Text>
        <Input
          onChange={inputfn}
          w="70%"
          bg="#f1f2f4"
          type="email"
          size="lg"
          name="email"
          placeholder="Enter Email"
        />
        <Input
          onChange={inputfn}
          w="70%"
          bg="#f1f2f4"
          type="text"
          size="lg"
          name="name"
          placeholder="Enter Name"
        />
        <Input
          onChange={inputfn}
          w="70%"
          bg="#f1f2f4"
          type="text"
          size="lg"
          name="pass"
          placeholder="Enter Password.."
        />
        <Button onClick={signupfn} w="70%" colorScheme="purple" size="lg">
          Sign Up
        </Button>
        <Text mb="-12px">Already have Account</Text>
        <Link to="/login">
          <Button variant="link" color="red">
            Login Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Signup;
