import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

const Graph = ({ price, data }) => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

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
            width="100%"
        >
            <h2>{`$${price}`}</h2>

            <Box width={isNotSmallerScreen ? "80%" : "98%"} height="100%">
                <Line data={data} options={opts} />
            </Box>
        </Flex>
    )
};

export default Graph;