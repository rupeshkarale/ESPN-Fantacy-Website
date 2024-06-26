import { Box, Heading, Text, Button, Flex, Avatar } from "@chakra-ui/react";
import React from "react";
import { AuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Mycontest = () => {
  const navigate = useNavigate();
  const { Auth } = React.useContext(AuthContext);
  React.useEffect(() => {
    if (Auth === false) {
      navigate("/");

      Swal.fire({
        icon: "info",
        title: "Hey",
        text: "Please Login First!",
      });
    }
  }, []);

  const { contest } = React.useContext(AuthContext);

  return contest.length == 0 ? (
    <Heading fontSize="2xl" mt="40" ml="12" color="red">
      Contest Not Found..Please Join Contest !!
    </Heading>
  ) : (
    <Box display="flex" w="100%" p="2" gap={"3"} flexDirection="column">
      {contest.map((ele) => {
        return (
          <Box
            width="100%"
            className="contest-data"
            mt="1"
            display="flex"
            flexDirection="column"
            gap="3"
            borderBottom={"2px"}
            shadow="lg"
            borderWidth="1px"
            borderRadius="md"
            borderColor="gray.200"
            bg="white"
          >
            <Box display="flex" justifyContent="space-between">
              <Heading fontSize="23" color="#ff4333">
                Winner Takes Glory
              </Heading>
              <Text className="text">Winner 0</Text>
            </Box>
            <Box
              display="flex"
              bg="#f8f7f3"
              p="2"
              justifyContent="space-between"
            >
              <Text as="B" className="text">
                49 Left
              </Text>
              <Text as="b" className="text">
                50 Teams
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Button bg="black" color="white" size="xs">
                  C
                </Button>
                <Button ml="2" bg="black" color="white" size="xs">
                  M
                </Button>
              </Box>
              <Flex justifyContent="center" alignItems="center" gap="1">
                <Flex align="center" gap="2">
                  <Avatar size="sm" src={ele.team1img}></Avatar>
                  <Text maxWidth="28" maxHeight="5" noOfLines="1" fontSize="sm">
                    {ele.team1}
                  </Text>
                </Flex>
                <Text>VS</Text>
                <Flex alignItems="center" gap="2">
                  <Avatar size="sm" src={ele.team2img}></Avatar>
                  <Text maxWidth="28" maxHeight="5" noOfLines="2" fontSize="sm">
                    {ele.team2}
                  </Text>
                </Flex>
              </Flex>
              <Box display="flex" alignItems="center" gap="3">
                <Text className="text">Entry Fees</Text>
              </Box>
            </Box>
          </Box>
        );
      })}{" "}
    </Box>
  );
};

export default Mycontest;
