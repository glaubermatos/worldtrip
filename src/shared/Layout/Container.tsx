import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode;
}

export function Container( { children }: ContainerProps) {
    return(
        <Box w={'90%'} maxW={'1240px'} m={'auto'}>
            {children}
        </Box>
    )
}