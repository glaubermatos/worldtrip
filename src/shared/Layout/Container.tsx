import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { ReactNode } from "react"

interface ContainerProps extends BoxProps{
    children: ReactNode;
}

export function Container( { children, ...rest }: ContainerProps) {
    return(
        <Box h={'100%'} w={'100%'} maxWidth={1240} {...rest}>
            {children}
        </Box>
    )
}