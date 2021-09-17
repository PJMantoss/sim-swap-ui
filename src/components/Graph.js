import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Flex } from "@chakra-ui/react"

const Graph = ({ price, data }) => {
    const opts = {
        tooltips: {
            intersect: false,
            mode: "index"
        },
        responsive: true,
        maintainAspectRatio: false
    };

    if(price === "0.00"){
        return <h2>Please select a currency pair</h2>
    }

    return(
        <Flex 
            flexDirection="column" 
            alignItems="center"
        >
            <h2>{`$${price}`}</h2>

            <Box className="chart-container">
                <Line data={data} options={opts} />
            </Box>
        </Flex>
    )
};

export default Graph;