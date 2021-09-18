import React from 'react';
import { Line } from 'react-chartjs-2';
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";

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

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return(
        <Flex 
            flexDirection="column" 
            alignItems="center"
            width={isNotSmallerScreen ? "80%" : "98%"}
        >
            <h2>{`$${price}`}</h2>

            <Box>
                <Line data={data} options={opts} />
            </Box>
        </Flex>
    )
};

export default Graph;