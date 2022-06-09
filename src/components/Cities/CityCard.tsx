import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export function CityCard() {
    return(
        <Box bg={'white'} h={'279px'} w={'256px'} borderRadius={'base'} border='1px' borderColor='hsla(43, 100%, 52%, 0.5)'>
            <Image
                h={['10.8125rem']}
                w={'100%'}
                objectFit='cover'
                src='assets/images/europa-image-2.jpg'
                alt='Imagem da europa'
            />
            <Flex mt={'1.125rem'} mb={'6'} mx='6' justify={'space-between'} align={'center'}>
                <Stack spacing={'3'}>
                    <Heading fontSize={'xl'} lineHeight={'25px'} fontWeight='semibold'>Londres</Heading>
                    <Text color={'#999999'}>Reino Unido</Text>
                </Stack>
                <Image
                    h={['1.875rem']}
                    w={['1.875rem']}
                    objectFit='cover'
                    src='assets/images/reino-unido.svg'
                    alt='Reino unido'
                />
            </Flex>
        </Box>
    ) 
}