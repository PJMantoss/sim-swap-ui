import React, { useState, useRef, useEffect } from 'react';
import Graph from './Graph';

const PriceChart = props => {
    const [currencies, setCurrencies] = useState([]);
    const [pair, setPair] = useState("");
    const [price, setPrice] = useState("0.00");
    const [pastData, setPastData] = useState({});
    const ws = useRef(null);

    let first = useRef(false);
    const url = "https://api.pro.coinbase.com";

    return (
        <div>
            
        </div>
    );
};

export default PriceChart;