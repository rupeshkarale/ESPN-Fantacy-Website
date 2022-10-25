import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
    AlertDescription,
  CloseButton
} from "@chakra-ui/react";
const Alertstyle = ({ status, message, title, onClose }) => {
  return (
    <Alert display="flex" alignItems={'center'} status={"info"}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  );
};

export default Alertstyle