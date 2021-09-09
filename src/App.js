import logo from "./logo.png";
import "./App.css";
import React, { useContext } from "react";
import { Web3Context } from "./web3";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";

function App() {
  const { account, connectWeb3, logout } = useContext(Web3Context);

  return (
    <VStack>
      <Flex>
        <Heading></Heading>
      </Flex>
    </VStack>
  );
}

export default App;
