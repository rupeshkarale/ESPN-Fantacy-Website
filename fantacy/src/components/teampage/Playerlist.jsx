import React from "react";
import {
  Box,
  Text,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import { Tabs, Tab } from "@chakra-ui/react";
import Teaminfo from "./teaminfo";
import { useNavigate } from "react-router-dom";
import "../match/match.css";
import { AuthContext } from "../../context/AuthContext";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { API_URL } from "./../../utils/constant";

const Playerlist = ({ team1, team2 }) => {
  const { setTeamfn } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [player, setplayer] = React.useState([]);
  const [playerlist, setplayerlist] = React.useState([]);
  const [page, setpage] = React.useState(1);
  const [isfilter, setisfilter] = React.useState(false);
  const [display, setdisplay] = React.useState("none");

  React.useEffect(() => {
    fetch(`${API_URL}/teams?page=${page}&limit=4`)
      .then((res) => res.json())
      .then((res) => setplayer(res.data))
      .catch((err) => console.log(err));
  }, [page]);

  const addplayer = (id, name, country, flag) => {
    if (flag == false) {
      let obj = {
        id: id,
        name: name,
        country: country,
      };
      setplayerlist((data) => {
        return [...data, obj];
      });
    } else {
      let newdata = playerlist.filter((item) => item.id != id);
      setplayerlist(newdata);
    }
  };

  const filterfn = () => {
    if (isfilter == true) {
      const data1 = player.sort((a, b) => {
        if (a.cr > b.cr) {
          return -1;
        }
        if (a.cr < b.cr) {
          return 1;
        }
      });
      setplayer(() => {
        return data1;
      });
      setisfilter(false);
    } else {
      const data1 = player.sort((a, b) => {
        if (a.cr > b.cr) {
          return 1;
        }
        if (a.cr < b.cr) {
          return -1;
        }
      });
      setisfilter(true);

      setplayer((data) => {
        return data1;
      });
    }
  };

  const sendtoconetxt = () => {
    if (playerlist.length < 11) {
      setdisplay("flex");
    } else {
      navigate("/home");
    }
    setTeamfn(playerlist);
    fetch(`${API_URL}/teams`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerlist),
    });
  };

  const onClose = () => {
    setdisplay("none");
  };

  return (
    <Box h="100vh" display="flex" flexDirection="column" gap="3">
      <Tabs
        mt={"2"}
        p="6px 0px"
        colorScheme="blue"
        borderRadius="md" // Add rounded corners
        variant="enclosed-colored"
        bgColor="InactiveCaption"
      >
        <TabList display="flex" justifyContent="space-evenly">
          <Tab className="machname" onClick={() => setpage(1)}>
            Wk
          </Tab>
          <Tab className="machname" onClick={() => setpage(2)}>
            BAT
          </Tab>
          <Tab className="machname" onClick={() => setpage(3)}>
            AR
          </Tab>
          <Tab className="machname" onClick={() => setpage(4)}>
            BOW
          </Tab>
        </TabList>
      </Tabs>
      <Box display="flex" justifyContent="space-between">
        <Text textAlign={"center"} flex="3" fontSize="md" className="machname">
          Players Name
        </Text>
        <Text textAlign={"center"} className="machname" flex="1">
          PTS
        </Text>
        <Text textAlign={"center"} className="machname" flex={"1"}>
          S.by%
        </Text>
        <Text
          flex={"1"}
          className="machname"
          cursor="pointer"
          onClick={filterfn}
          textAlign={"center"}
        >
          CR{isfilter == false ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </Text>
      </Box>
      <Box display="flex" w="100%" flexDirection="column" gap="2" p={"2"}>
        {player.map((item) => (
          <Teaminfo
            key={item.id}
            team1={team1}
            team2={team2}
            onclickfn={addplayer}
            page={page}
            isSelected={playerlist.some((player) => player.id === item.id)}
            {...item}
          />
        ))}
      </Box>
      <Alert variant={"left-accent"} display={display} status="error">
        <Box display="flex">
          <AlertIcon />
          <AlertTitle>Select Minimum 11</AlertTitle>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-330}
            top={-1}
            onClick={onClose}
          />
        </Box>
      </Alert>
      <Button
        display="block"
        mx="auto"
        colorScheme="purple"
        size={["md", "lg"]}
        onClick={sendtoconetxt}
      >
        Save & Continue
      </Button>
    </Box>
  );
};

export default Playerlist;
