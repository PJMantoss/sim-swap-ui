import logo from "./logo.png";
import "./App.css";
import React, { useContext } from "react";
import { Web3Context } from "./web3";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from 'react-icons/fa';
import { Image } from "@chakra-ui/react";
//https://www.dropbox.com/sh/3ykmghjcaordk7n/AAABIrQ6uulce6k7KENitQXRa?dl=0&preview=keko_logo_color.png

function App() {
  const { account, connectWeb3, logout } = useContext(Web3Context);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={3}>
      <Flex w="100%">
        <Heading ml="5" size="md" fontWeight='semibold' color="cyan.400">swapUI</Heading>

        <Spacer></Spacer>
        
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
    </VStack>
  );
}

export default App;
