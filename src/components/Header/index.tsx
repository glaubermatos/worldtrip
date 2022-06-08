import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Container } from "../../shared/Layout/Container";
import { Logo } from "./Logo";

import { FiChevronLeft } from 'react-icons/fi'

interface HeaderProps {
    showButtonBackHome?: boolean
}

export function Header({showButtonBackHome}: HeaderProps) {

    const route = useRouter()

    function handleReturnHome() {
        route.push('/')
    }

    return(
        <Flex>
            <Container m={'auto'}>
                <Flex  justifyContent={'center'} align={'center'} h={['3.125rem', '6.25rem']} position={'relative'}>
                    {showButtonBackHome && (
                        <IconButton
                            aria-label="Navigation home"
                            display={'flex'}
                            position={'absolute'}
                            left={['4', '4','10']}
                            alignItems={'center'}
                            justifyContent={'center'}
                            icon={<Icon as={ FiChevronLeft } />}
                            fontSize="24"
                            variant="unstyled"
                            onClick={handleReturnHome}
                            mr="2"
                        />
                    )}
                    <Logo />
                </Flex>
            </Container>
        </Flex>
    )
}