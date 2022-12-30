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
        })
    },
    defaultProps: {

    }
}