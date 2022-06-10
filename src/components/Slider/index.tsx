// import Swiper core and required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Heading, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export function Slider() {

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
        <SwiperSlide>
            <Box h={'100%'}>
                <Link href={'/continent'} passHref>
                    <ChakraLink h={'100%'} w={'100%'} _hover={{textDecoration: 'none'}}>
                        <Stack spacing={['3', '4']} justify={'center'} align={'center'} h={'100%'} bgImage={"url('assets/images/europa-image.jpg')"}>
                            <Text color={'#fff'} fontSize={['2xl', '5xl']} fontWeight={'bold'}>Europa</Text>
                            <Text color={'#fff'} fontSize={['sm', '2xl']} fontWeight={'bold'}>O continente mais antigo</Text>
                        </Stack>
                    </ChakraLink>
                </Link>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Stack spacing={['3', '4']} justify={'center'} align={'center'} h={'100%'} bgImage={"url('assets/images/europa-image.jpg')"}>
                <Text color={'#fff'} fontSize={['2xl', '5xl']} fontWeight={'bold'}>Europa</Text>
                <Text color={'#fff'} fontSize={['sm', '2xl']} fontWeight={'bold'}>O continente mais antigo</Text>
            </Stack>
        </SwiperSlide>
        <SwiperSlide>
            <Stack spacing={['3', '4']} justify={'center'} align={'center'} h={'100%'} bgImage={"url('assets/images/europa-image.jpg')"}>
                <Text color={'#fff'} fontSize={['2xl', '5xl']} fontWeight={'bold'}>Europa</Text>
                <Text color={'#fff'} fontSize={['sm', '2xl']} fontWeight={'bold'}>O continente mais antigo</Text>
            </Stack>
        </SwiperSlide>
        <SwiperSlide>
            <Stack spacing={['3', '4']} justify={'center'} align={'center'} h={'100%'} bgImage={"url('assets/images/europa-image.jpg')"}>
                <Text color={'#fff'} fontSize={['2xl', '5xl']} fontWeight={'bold'}>Europa</Text>
                <Text color={'#fff'} fontSize={['sm', '2xl']} fontWeight={'bold'}>O continente mais antigo</Text>
            </Stack>
        </SwiperSlide>
        <SwiperSlide>
            <Stack spacing={['3', '4']} justify={'center'} align={'center'} h={'100%'} bgImage={"url('assets/images/europa-image.jpg')"}>
                <Text color={'#fff'} fontSize={['2xl', '5xl']} fontWeight={'bold'}>Europa</Text>
                <Text color={'#fff'} fontSize={['sm', '2xl']} fontWeight={'bold'}>O continente mais antigo</Text>
            </Stack>
        </SwiperSlide>
      </Swiper>

    //     <Swiper
    //   // install Swiper modules
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    // </Swiper>
    )
}