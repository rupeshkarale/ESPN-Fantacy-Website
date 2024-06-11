import React from "react";
import { Box, Avatar, Text } from "@chakra-ui/react";
import "../match/match.css";
import styled from "styled-components";
const Teaminfo = ({
  id,
  playerImg,
  name,
  country,
  onclickfn,
  cr,
  sby,
  pts,
  page,
  isSelected,
}) => {
  const [flag, setflag] = React.useState(isSelected);

  const PlayerContainer = styled.div`
    padding: 1rem 1rem;
    background-color: ${flag ? "#F7ECDE" : "#F8F8F9"};
    border: ${flag ? "2px solid #E0E0E0" : "1px solid #E0E0E0"};
    border-radius: 5px;
  `;

  const bothfn = (name, country, id, flag) => {
    onclickfn(id, name, country, flag);
    setflag((flag) => {
      return !flag;
    });
  };
  return (
    <PlayerContainer>
      <Box
        onClick={() => bothfn(name, country, id, flag)}
        display="flex"
        w="100%"
        gap={["2", "6"]}
        justifyContent="start"
        cursor={"pointer"}
      >
        <Box display="flex" w="50%">
          <Avatar src={playerImg}></Avatar>
          <Box ml="3">
            <Text fontSize={"sm"} fontWeight={"medium"}>
              {name}
            </Text>
            <Text>{country}</Text>
          </Box>
        </Box>
        <Box display="flex" w="50%" justifyContent="space-between">
          <Box>{sby}</Box>
          <Box>{pts}</Box>
          <Box>{cr}</Box>
        </Box>
      </Box>
    </PlayerContainer>
  );
};

export default Teaminfo;
