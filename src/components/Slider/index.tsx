// import Swiper core and required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Heading, Stack, Text, Link as ChakraLink, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Continents {
    id: string;
    name: string;
    description: string,
    image: {
        url: string,
        title: string
    }
}

export function Slider() {
    const [continents, setContinents] = useState<Continents[]>([])

    useEffect(() => {
        async function loadData() {
            const response = await api.get<Continents[]>('/continents')
            setContinents(response.data)
        }

        loadData()
    }, [])

    return (

        <Swiper style={{
            height: '450px',
            width: '100%'
        }}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // className={styles.swiper}
      >

        {continents.map((continent) => {
            return(
                <SwiperSlide key={continent.id}>
                    <Link href={'/continent'} passHref>
                        <ChakraLink h={'100%'} w={'100%'} _hover={{textDecoration: 'none'}}>
                            
                            <Stack spacing={['3', '4']} justify={'center'} align={'center'} h={'100%'} position='relative' /* bgImage={`url(${continent.image.url})`} objectFit='cover' */>
                                <Image
                                    position={'absolute'}
                                    h='100%'
                                    w='100%'
                                    top={0}
                                    left={0}
                                    src={continent.image.url}
                                    alt={continent.image.title}
                                    objectFit='cover'
                                    zIndex={0}
                                />
                                <Text zIndex={1} color={'#fff'} fontSize={['2xl', '5xl']} fontWeight={'bold'}>{continent.name}</Text>
                                <Text zIndex={1} color={'#fff'} fontSize={['sm', '2xl']} fontWeight={'bold'}>{continent.description}</Text>
                            </Stack>
                        </ChakraLink>
                    </Link>
                </SwiperSlide>        
            )
        })}

      </Swiper>
    )
}