import { Flex } from "@chakra-ui/react";
import { Container } from "../../shared/Layout/Container";
import { Logo } from "./Logo";

export function Header() {
    return(
        <Flex>
            <Container>
                <Flex justify={'center'} align={'center'} h={'6.25rem'}>
                    <Logo />
                </Flex>
            </Container>
        </Flex>
    )
}