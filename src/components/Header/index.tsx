import { Flex } from "@chakra-ui/react";
import { Container } from "../../shared/Layout/Container";
import { Logo } from "./Logo";

export function Header() {
    return(
        <Flex>
            <Container m={'auto'}>
                <Flex justifyContent={'center'} align={'center'} h={['3.125rem', '6.25rem']} >
                    <Logo />
                </Flex>
            </Container>
        </Flex>
    )
}