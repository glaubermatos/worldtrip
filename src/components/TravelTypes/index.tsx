
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
        md: false,
        lg: true,
    })

    return(
        <Container m={'auto'} py={'9'} px={'3.125rem'}>
            <Flex justify={'center'} wrap={'wrap'} rowGap={'7'} >
                { Object.entries(travelTypes).map(([key, value], indice) => {
                    return(
                        <>
                            { isWideVersion ? (
                                <Flex key={key} direction={'column'} >
                                    <Image src={value.image.source} alt={value.image.alt} />
                                    <Text>{value.title}</Text>
                                </Flex>
                            ) : (
                                <Flex minWidth={'50%'} key={key} direction={'row'} justify={ indice % 2 === 1 ? 'flex-end' : indice + 1 === Object.entries(travelTypes).length ? 'center' : 'flex-start'} align={'center'} gap={'2'}>
                                    <Box h={'2'} w={'2'} bg={'#FFBA08'} borderRadius={'100%'} />
                                    <Text>{value.title}</Text>
                                </Flex>
                            )}
                        </>


                        
                    )
                }) }
            </Flex>
        </Container>
    )
}