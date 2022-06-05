import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Container } from "../../shared/Layout/Container";

export function Banner() {
    return(
        <Box h={['10.1875rem', '20.9375rem']} bgImage={"url('assets/images/banner-background.png')"} >
            <Container m='auto'>
                <Flex h={'100%'} pl={4} direction={'column'} justify={'center'}>
                    <Stack spacing={[2, 5]} >
                        <Heading color={'gray.50'} fontSize={['xl', '4xl']} fontWeight={'medium'} lineHeight={['1.5625rem', '2.8125rem']}>
                            5 Continentes, <br />infinitas possibilidades.
                        </Heading>
                        <Text color={'gray.300'} fontSize={['sm', 'xl']}>
                            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                        </Text>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}