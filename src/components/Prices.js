import React from 'react';
import CoinGecko from 'coingecko-api'

const coinGeckoClient = new CoinGecko();


const Prices = props => {
    const { data } = props.result;
    console.log(data);

    const formatPercent = num => `${new Number(num).toFixed(2)}%`;

    const formatDollar = (number, maximumSignificantDigits) => 
        new Intl.NumberFormat('en-Us', {
            style: 'currency',
            currency: 'usd',
            maximumSignificantDigits
        }).format(number);

    return (
        <div>
            <h1>Prices</h1>
        </div>
    );
};

export default Prices;