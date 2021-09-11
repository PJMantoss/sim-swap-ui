import logo from "./logo.png";
import "./App.css";
import React, { useContext } from "react";
import { Web3Context } from "./web3";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from 'react-icons/fa';
import { ArrowUpDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { 
  Box, 
  Button,
  Image, 
  Input,
  InputGroup, 
  InputLeftAddon,
  Link,
  Center 
} from "@chakra-ui/react";
//https://www.dropbox.com/sh/3ykmghjcaordk7n/AAABIrQ6uulce6k7KENitQXRa?dl=0&preview=keko_logo_color.png

function App() {
  const { account, connectWeb3, logout } = useContext(Web3Context);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={3}>
      <Flex 
          w="100%"
          justifyContent="center"
          alignItems="center"
      >
        <Heading ml="5" size="md" fontWeight='semibold' color="cyan.400">swapUI</Heading>

        <Button
          colorScheme="teal"
          size="sm"
          variant="ghost"
        >
          ETH/USD Prices
        </Button>
        <Button
          colorScheme="teal"
          size="sm"
          variant="ghost"
        >
          Price Graph
        </Button>
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

        <Spacer></Spacer>

        <Button colorScheme="teal" size="sm">Connect to a wallet</Button>
        
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>

      <Spacer></Spacer>

      <Center width="100%">
        <Flex 
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box bg="#161522" size="sm" borderRadius="lg">
            <Button colorScheme="#161522" size="sm">
              ETH Balance
            </Button>
            <Button colorScheme="transparent" opacity="0.5" size="sm">
              SimETH Balance
            </Button>
            <Button colorScheme="transparent" opacity="0.5" size="sm">
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
        </Flex>
      </Center>
    </VStack>
  );
}

export default App;
