
import { Box, Flex, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { Container } from '../../shared/Layout/Container'

export const travelTypes = {
    NIGHTLIFE: {
        title: 'Vida noturna',
        image: {
            source: 'assets/images/cocktail.svg',
            alt: 'Imagem de um drink'
        }
    },
    BEACH: {
        title: 'Praia',
        image: {
            source: 'assets/images/surf.svg',
            alt: 'Imagem de uma praia'
        }
    },
    MODERN: {
        title: 'Moderno',
        image: {
            source: 'assets/images/building.svg',
            alt: 'Imagem de uma núvem de prédio'
        }
    },
    CLASSIC: {
        title: 'Clássico',
        image: {
            source: 'assets/images/museum.svg',
            alt: 'Imagem de um museu'
        }
    },
    MORE: {
        title: 'e mais...',
        image: {
            source: 'assets/images/earth.svg',
            alt: 'Imagem do planeta terra'
        }
    },
}

export function TravelTypes() {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
        lg: true,
    })

    return(
        <Container m={'auto'} pt={['9', '9', '7.125rem']} pb={['9', '9', '20']} px={['3.125rem', '3.125rem', '10']}      >
            <Flex justify={isWideVersion ? 'space-between' : 'center'} wrap={'wrap'} rowGap={'7'} >
                { Object.entries(travelTypes).map(([key, value], indice) => {
                    return(
                        <>
                            { isWideVersion ? (
                                <Stack key={`wide_${key}`} gap={'6'} align={'center'}>
                                    <Image src={value.image.source} alt={value.image.alt} boxSize={'5.3125rem'} />
                                    <Text fontSize={'2xl'} fontWeight={'semibold'}>{value.title}</Text>
                                </Stack>
                            ) : (
                                <Flex minWidth={'50%'} key={`small_${key}`} direction={'row'} justify={ indice % 2 === 1 ? 'flex-end' : indice + 1 === Object.entries(travelTypes).length ? 'center' : 'flex-start'} align={'center'} gap={'2'}>
                                    <Box h={'2'} w={'2'} bg={'#FFBA08'} borderRadius={'100%'} />
                                    <Text fontSize={'1.125rem'}>{value.title}</Text>
                                </Flex>
                            )}
                        </>                        
                    )
                }) }
            </Flex>
        </Container>
    )
}