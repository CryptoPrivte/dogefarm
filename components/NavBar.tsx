import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading>DogeFarm Crypto</Heading>                
                <Flex alignItems={"center"}>
                    <Link href={"/"} mx={2}>Play</Link>
                    <Link href={"/shop"} mx={2}>Shop</Link>
                    <Link href={""} mx={2}>Evolution</Link>
                </Flex>
                <ConnectWallet/>
            </Flex>
        </Container>
    )
};