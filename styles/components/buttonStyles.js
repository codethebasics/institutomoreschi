import { mode } from "@chakra-ui/theme-tools"

export const ButtonStyles = {
    baseStyle: {
        borderRadius: '3px'
    },
    sizes: {

    },
    variants: {
        primary: (props) => ({
            bg: mode('primary', 'secondary')(props),
            color: '#fff',
            _hover: {
                opacity: 0.8
            }
        }),
        secondary: (props) => ({
            bg: mode('secondary', 'secondary')(props),
            color: '#fff',
            _hover: {
                opacity: 0.8
            }
        }),
        light: (props) => ({
            bg: mode('light', 'dark')(props),
            color: '#222',
            _hover: {
                opacity: 0.8
            }
        })
    },
    defaultProps: {

    }
}