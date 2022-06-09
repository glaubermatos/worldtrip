import { Box, Center, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Container } from "../../shared/Layout/Container";

export function ContinentBanner() {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true
    })

    return(
        <Box h={['9.375rem', '31.25rem']} position={'relative'}>
            <Image
                position={'absolute'}
                top={0}
                h={['9.375rem', '31.25rem']}
                w={'100%'}
                objectFit='cover'
                src='assets/images/europa-image-2.jpg'
                alt='Imagem da europa'
            />
            <Container m={'auto'} position={'relative'}>
                {isWideVersion ? (
                    <Text fontWeight={'semibold'} fontSize={['1.75rem', '5xl']} color={'gray.50'} position={'absolute'} left={'10'} bottom={'3.75rem'}>Europa</Text>
                ) : ( 
                    <Flex h={'100%'} justify={'center'} align='center'>
                        <Text fontWeight={'semibold'} fontSize={['1.75rem', '5xl']} color={'gray.50'}>Europa</Text>
                    </Flex>
                )}
            </Container>

        </Box>
    )
}