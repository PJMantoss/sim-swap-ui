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
    Image
  } from "@chakra-ui/react";

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

    return (
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
                        <Td><Image  src={coin.image} style={{width: 25, height: 25, marginRight: 10}}/></Td>
                        <Td>
                            <span
                                className={coin.price_change_percentage_24h > 0 ? (
                                    'text-sucess'
                                    ) : 'text-danger'}
                                >
                                {formatPercent(coin.price_change_percentage_24h)}
                            </span>
                        </Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Prices;