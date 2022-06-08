import { Text } from "@chakra-ui/react";
import { Slider } from '../Slider'
import { Container } from "../../shared/Layout/Container";

export function Continents() {
    return (
        <Container m={'auto'} mb={'10'}>
            <Text mx={"10"} mt={['6', '14']} mb={['5', '14']} textAlign={'center'} fontWeight={'medium'} fontSize={['xl', '4xl']}>Vamos nessa? <br /> Então escolha seu continente </Text>
            <Slider/>
        </Container>
    )
}