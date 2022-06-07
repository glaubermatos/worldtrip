import { Box, Flex, Heading, Image, Stack, Text, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { Container } from "../../shared/Layout/Container";

export function Banner() {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        lg: true
    })

    return(
        <Box h={['10.1875rem', '20.9375rem']} bgImage={"url('assets/images/banner-background.png')"} >
            <Container m='auto'>
                <Flex h={'100%'} px={[4, 4, 10]} direction={'column'} justify={'center'} position={'relative'}>
                    <Stack spacing={[2, 5]} >
                        <Heading color={'gray.50'} fontSize={['xl', '4xl']} fontWeight={'medium'} lineHeight={['1.5625rem', '2.8125rem']}>
                            5 Continentes, <br />infinitas possibilidades.
                        </Heading>
                        <Text maxW={'32.75rem'} color={'gray.300'} fontSize={['sm', 'xl']}>
                            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                        </Text>
                    </Stack>
                    { isWideVersion && (
                        <Image
                            src='assets/images/airplane.svg'
                            alt='Airplane image'
                            position={'absolute'}
                            right={'10'}
                            bottom={'-9'}
                        />
                    )}
                </Flex>
            </Container>
        </Box>
    )
}