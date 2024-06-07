import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Matches from "./components/match/matches";
import Home from "./components/home/home";
import Team from "./components/teampage/team";
import Mycontest from "./components/mycontest/mycontest";
import Navbar from "./components/Fantacy-navbar/Navbar";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";
import { BottamBar } from "./components/Fantacy-navbar/BottamBar";

function App() {
  return (
    <div className="App">
      <Box width="100%" margin="auto">
        <Box display="flex" justifyContent="center">
          <Box
            width="40%"
            minHeight="100vh"
            border="3px solid #5217b0 "
            display="flex"
            flexDirection="column"
          >
            <Navbar></Navbar>
            <Box>
              <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/matches" element={<Matches />}></Route>
                <Route path="/mycontest" element={<Mycontest />}></Route>
                <Route path="/matches/:id" element={<Team />}></Route>
              </Routes>
            </Box>
            <BottamBar></BottamBar>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
