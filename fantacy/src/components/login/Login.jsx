import React from "react";
import { Box, Text, Input, Heading, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Alertstyle from "../Alert-component/Alert";
import { API_URL } from "../../utils/constant";
import axios from "axios";
const Login = () => {
  const { isAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [pass, setpass] = React.useState("");
  const [email, setemail] = React.useState("");
  const [data, setdata] = React.useState({ email: "", pass: "", name: "" });
  const [display, setdiplay] = React.useState();
  const [title, settitle] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [message, setmessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function loginfn() {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/login`, {
        username: email,
        password: pass,
      });

      isAuth(() => true);
      setdiplay(() => true);
      settitle(() => "Success");
      setmessage(() => "Login successful");
      setStatus(() => "success");
      setTimeout(() => {
        navigate("/matches");
      }, 500);
    } catch (error) {
      setdiplay(() => true);
      settitle(() => "Error");
      setmessage(() => error.response.data.message);
      setStatus(() => "error");
    }
    setLoading(false);
  }
  function onclosefn() {
    setdiplay(() => false);
  }
  return (
    <Box mt={["20", "32"]} w="100%">
      {display ? (
        <Alertstyle
          title={title}
          onClose={onclosefn}
          status={status}
          message={message}
        />
      ) : null}

      <Box gap="5" display="flex" alignItems="center" flexDirection="column">
        <Heading>LOGIN</Heading>
        <Text mt="-2" mb="5">
          Please Enter Your Email and Password
        </Text>
        <Input
          onChange={(e) => setemail(e.target.value)}
          w="70%"
          bg="#f1f2f4"
          type="email"
          size="lg"
          name="email"
          placeholder="Enter Email"
        />
        <Input
          onChange={(e) => setpass(e.target.value)}
          w="70%"
          bg="#f1f2f4"
          type="text"
          size="lg"
          name="pass"
          placeholder="Enter Password.."
        />
        <Button
          isLoading={loading}
          onClick={loginfn}
          w="70%"
          colorScheme="purple"
          size="lg"
        >
          Login
        </Button>
        <Text mb="-12px">Don't Have Account SignUp</Text>
        <Link to="/">
          <Button variant="link" color="red">
            SignUp
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default Login;
