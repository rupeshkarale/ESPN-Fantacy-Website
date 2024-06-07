import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  Tab,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const BottamBar = () => {
  const { Auth, isAuth } = React.useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();

  const handlelogout = () => {
    isAuth(() => false);
    onClose();
    navigate("/");
  };
  return (
    <Box h="100%" w="100%" position="relative">
      <Tabs pos="fixed" w={["100%", "39.5%"]} bottom="0" zIndex="modal">
        <TabList
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
          w="100%"
          bg="ButtonFace"
        >
          {/* <Link to="/"> */}
          <Tab
            as="button"
            w="32"
            colorScheme="purple"
            _selected={{ color: "white", bg: "Purple" }}
            onClick={Auth ? onOpen : null}
          >
            {Auth ? "LOGOUT" : "SIGNUP"}
          </Tab>
          {/* </Link> */}
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
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent w={"90%"}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Logout
              </AlertDialogHeader>

              <AlertDialogBody>Are you sure?</AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handlelogout} ml={3}>
                  Logout
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </Box>
  );
};
