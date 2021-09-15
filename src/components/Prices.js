import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Image,
    Box
  } from "@chakra-ui/react";
  import { useMediaQuery } from "@chakra-ui/react";

  import './Prices.css'


const Prices = () => {
    const [coins, setCoins] = useState([]);
    
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    useEffect(() => {
        fetch(url)
           .then(res => res.json())
           .then(data => setCoins(data)) //console.log(data);
           .catch(err => console.error(err));
    }, []);

    const formatPercent = num => `${new Number(num).toFixed(2)}%`;

  const formatDollar = (number, maximumSignificantDigits) => 
      new Intl.NumberFormat('en-Us', {
        style: 'currency',
        currency: 'usd',
        maximumSignificantDigits
      }).format(number);

      const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Box overflowX="scroll">
        <Table variant="striped" colorScheme="teal">
            <TableCaption>Prices</TableCaption>
            <Thead>
                <Tr>
                    <Th>Symbol</Th>
                    <Th></Th>
                    <Th>24Hour Change</Th>
                    <Th>Price</Th>
                    <Th>Market Cap</Th>
                </Tr>
            </Thead>
            <Tbody>
                {coins.map(coin => (
                    <Tr key={coin.id}>
                        <Td>{coin.symbol.toUpperCase()}</Td>
                        <Td><Image  src={coin.image} style={{width: isNotSmallerScreen ? 25 : 40, height: isNotSmallerScreen ? 25 : 40, marginRight: 10}}/></Td>
                        <Td>
                            <span
                                className={coin.price_change_percentage_24h > 0 ? (
                                    'text-success'
                                    ) : 'text-danger'}
                                >
                                {formatPercent(coin.price_change_percentage_24h)}
                            </span>
                        </Td>
                        <Td>{formatDollar(coin.current_price, 20)}</Td>
                        <Td>{formatDollar(coin.market_cap, 12)}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
        </Box>
    );
};

export default Prices;