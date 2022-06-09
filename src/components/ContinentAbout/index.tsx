import { Flex, Icon, IconButton, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Container } from "../../shared/Layout/Container";

import { BiInfoCircle } from 'react-icons/bi'

export function ContinentAbout() {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        lg: false,
        xl: true
    })

    return(
        <Container m={'auto'}>
            <Flex mx={['4', '10']} mt={['6', '20']} flexDir={isWideVersion ? 'row' : 'column'} gap={['4', '4.375rem']}>
                <Text maxW={['100%', '100%', '100%', '100%', '37.5rem']} fontSize={['sm', '2xl']} textAlign={'justify'}>
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
                <Flex w={'100%'} justify={['space-between', 'space-between', 'space-evenly', 'space-evenly', 'space-between']} align={ isWideVersion ? 'center' : ''}> 
                    <Stack align={['flex-start', 'flex-start', 'center']}>
                        <Text fontSize={['2xl', '2xl', '5xl']} fontWeight={'semibold'} color={'#FFBA08'}>50</Text>
                        <Text fontSize={['lg', 'lg', '2xl']} fontWeight={['regular', 'semibold']}>países</Text>
                    </Stack>
                    <Stack align={['flex-start', 'flex-start', 'center']}>
                        <Text fontSize={['2xl', '2xl', '5xl']} fontWeight={'semibold'} color={'#FFBA08'}>60</Text>
                        <Text fontSize={['lg', 'lg', '2xl']} fontWeight={['regular', 'semibold']}>línguas</Text>
                    </Stack>
                    <Stack align={['flex-start', 'flex-start', 'center']}>
                        <Text fontSize={['2xl', '2xl', '5xl']} fontWeight={'semibold'} color={'#FFBA08'}>24</Text>
                        <Flex justify={'center'} align={'center'} >
                            <Text fontSize={['lg', 'lg', '2xl']} fontWeight={['regular', 'semibold']}>
                                cidades +100                            
                            </Text>
                            <Icon as={ BiInfoCircle } opacity={'0.5'} ml="2"/>
                            {/* <IconButton
                                aria-label="Mais informações"
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                icon={<Icon as={ BiInfoCircle } />}
                                fontSize="16"
                                variant="outline"
                                ml="2"
                                color={'#999999'}
                                opacity={'0.5'} 
                            /> */}
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Container>
    )
}