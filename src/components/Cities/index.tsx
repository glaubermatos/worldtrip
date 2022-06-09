import { Box, Flex, Text } from "@chakra-ui/react";
import { Container } from "../../shared/Layout/Container";
import { CityCard } from '../../components/Cities/CityCard'

export function Cities() {
    return (
        <Container m={'auto'}px={['4', '10']}>
            <Text mt={['8', '20']}  fontSize={['2xl', '4xl']}>Cidades + 100</Text>
            <Flex mt={['5', '10']} mb='8' direction={['column', 'row']} align={['center', 'center']} gap={['5', '2.8125rem']} flexWrap={['wrap']} >
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
            </Flex>
        </Container>
    )
}