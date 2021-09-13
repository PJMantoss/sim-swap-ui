import React, { useContext } from "react";
import { Web3Context } from "./web3";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from 'react-icons/fa';
import { ArrowUpDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useMediaQuery } from '@chakra-ui/media-query';
import { 
  Box, 
  Button,
  Image, 
  Input,
  InputGroup, 
  InputLeftAddon,
  Link,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Prices from './components/Prices';
import "./App.css";

function App() {
  const { account, connectWeb3, logout } = useContext(Web3Context);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <VStack p={3}>
      <Flex 
          w="100%"
          justifyContent="center"
          alignItems="center"
      >
        <Heading ml="5" size="md" fontWeight='semibold' color="cyan.400">swapUI</Heading>

        <Spacer></Spacer>

        <Button
          colorScheme="teal"
          size="sm"
          variant="ghost"
        >
          Get SimUSD
        </Button>
        <Link href="https://faucet.rinkeby.io/" isExternal>
          Rinkeby <ExternalLinkIcon mx="2px" />
        </Link>

        <Button ml={4} colorScheme="teal" size="sm">Connect to a wallet</Button>
        
        <IconButton ml={6} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>

      <Spacer></Spacer>

      <Center width="100%">
        <Flex 
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box size="sm" borderRadius="lg">
            <Button size="sm">
              ETH Balance
            </Button>
            <Button opacity="0.5" size="sm">
              SimETH Balance
            </Button>
            <Button opacity="0.5" size="sm">
              SimUSD Balance
            </Button>
          </Box>

          <Spacer></Spacer>

          <Box mt={10} width="50%" p={5} bg="#161522" borderWidth="1px" borderRadius="md" overflow="hidden">
            <Button colorScheme="cyan" size="md">Swap</Button>
            
            <Box mt={5} py={8} px={5} bg="#202231" border="none" borderRadius="md">
              <InputGroup size="md">
                <InputLeftAddon p={3} children="simETH" />
                <Input p={5} type="number" bg="#161522" color="white" border="none" placeholder="0.00" />
              </InputGroup>
            </Box>

            <Center>
              <IconButton 
                  icon={<ArrowUpDownIcon />} 
                  borderWidth="1px" 
                  borderRadius="sm" 
              />
            </Center>

            <Box py={8} px={5} bg="#202231" border="none" borderRadius="md">
              <InputGroup size="md">
                <InputLeftAddon p={3} children="simUSD" />
                <Input p={5} type="number" bg="#161522" color="white" border="none" placeholder="0.00" />
              </InputGroup>
            </Box>

            <Button mt={2} colorScheme="teal" size="sm">Connect to a wallet</Button>
          </Box>

          <Spacer></Spacer>

          <Accordion mt={5} width="70%">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ETH/USD Prices
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Prices />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Price Graph
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Center>
    </VStack>
  );
}

export default App;
