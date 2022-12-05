import React, { useEffect, useState } from "react";
import { Box, Text, Image, Avatar, Button } from "@chakra-ui/react";
import Skeletonloading from "../Skeleton-loading/Skeleton";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Match from "./match";
import Swal from "sweetalert2";
const Matches = () => {
  const navigate = useNavigate();
  const { Auth } = React.useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Auth === false) {
      navigate("/");

      Swal.fire({
        icon: "info",
        title: "Heyy",
        text: "Please Login First!",
      });
    }
    getMatch();
  }, []);

  const getMatch = () => {
    fetch("https://espn-fantasy.onrender.com/match")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <Box mt="4%" width="40%" p="1">
      {loading ? (
        <Skeletonloading />
      ) : (
        data.map((match) => <Match key={match.id} {...match} />)
      )}
      {/* {data.map((match) => (
        <Match key={match.id} {...match} />
      ))} */}
    </Box>
  );
};

export default Matches;
