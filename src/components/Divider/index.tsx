import { Center, Divider as ChakraDivider } from "@chakra-ui/react";

export function Divider() {
    return(
        <Center>
            <ChakraDivider w={'5.625rem'} orientation='horizontal' bg={'#47585B'} h={'2px'}/>
        </Center>
    )
}