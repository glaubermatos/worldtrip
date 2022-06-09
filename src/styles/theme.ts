import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        
    },
    fonts: {
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`,
        cardTitle: `'Barlow', sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: '#F5F8FA',
                color: '#47585B'
            }
        }
    }
})