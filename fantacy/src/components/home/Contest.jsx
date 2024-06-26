import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContext";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./contest.css";
const Contest = ({ joincontest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { contest } = React.useContext(AuthContext);

  return (
    // contest.length==0 ? <h1>no data</h1> :
    <Box
      className="contest-data"
      mb="6"
      display="flex"
      flexDirection="column"
      gap="5"
      w="100%"
    >
      <Box display="flex" justifyContent="space-between">
        <Heading fontSize={["18", "23"]} color="#ff4333">
          Winner Takes Glory
        </Heading>
        <Text className="text">Winner 0</Text>
      </Box>
      <Box display="flex" bg="#f8f7f3" p="2" justifyContent="space-between">
        <Text as="B" className="text">
          49 Left
        </Text>
        <Text as="b" className="text">
          50 Teams
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Button bg="black" color="white" size="xs">
            C
          </Button>
          <Button ml="2" bg="black" color="white" size="xs">
            M
          </Button>
        </Box>
        <Box display="flex" alignItems="center" gap="3">
          <Text className="text">Entry Fees</Text>
          <Button onClick={onOpen} colorScheme="purple" mr="-2" w="20">
            Free
          </Button>
        </Box>
      </Box>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w={["80%", "100%"]}>
            <ModalHeader fontSize={["xl", "2xl"]}>CONFIRMATION</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box display="flex" flexDirection="column" gap={["0.5", "2"]}>
                <Box display="flex" justifyContent="space-between">
                  <Text>Entry Fee</Text>
                  <Text>$ 0</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Text>Usable Cash Bonus:</Text>
                  <Text>$ 0</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Text>To Pay :</Text>
                  <Text>$ 0</Text>
                </Box>
              </Box>
            </ModalBody>

            <ModalFooter display="block">
              <Link to="/matches" onClick={joincontest}>
                <Button width="100%" colorScheme="purple" onClick={onClose}>
                  Join Context
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default Contest;
