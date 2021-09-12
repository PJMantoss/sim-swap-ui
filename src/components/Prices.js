import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"


const Prices = props => {

    const getCoins = async () => {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    }

    return (
        <Table variant="striped" colorScheme="teal">
            <TableCaption>Prices</TableCaption>
            <Thead>
                <Tr>
                    <Th>Symbol</Th>
                    <Th>24Hour Change</Th>
                    <Th>Price</Th>
                    <Th>Market Cap</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
            </Tbody>
            <Tfoot>
                <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
                </Tr>
            </Tfoot>
        </Table>
    );
};

export default Prices;