import { MediaRenderer, Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { FARMER_ADDRESS } from "../const/addresses";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

export function ClaimFarmer() {
    const { contract } = useContract(FARMER_ADDRESS);
    const { data: metadata } = useContractMetadata(contract);
    
    return (
        <Container maxW={"1800px"}>
            <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} h={"80vh"}>
                <Heading>Claim Farmer to start farming</Heading>
                <Box borderRadius={"20px"} overflow={"hidden"} my={5}>
                    <MediaRenderer
                        src={metadata?.image}
                        height="500px"
                        width="500px"
                    />
                </Box>
                
                <Web3Button
                    contractAddress={FARMER_ADDRESS}
                    action={(contract) => contract.erc1155.claim(0, 1)}
                >Claim Farmer</Web3Button>
            </Flex>
        </Container>
    );
}