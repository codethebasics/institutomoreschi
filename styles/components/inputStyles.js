import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy);

const baseStyle = definePartsStyle({
    field: {        
        borderRadius: '4px !important',
        boxShadow: 'inset 0px 4px 10px rgba(216, 216, 216, 0.25)',
        width: '100%',
        color: '#222',
        outline: 'none !important',
        transition: 'all 0.2s',
        _focus: {
            boxShadow: 'none !important'
        },
        _placeholder: {
            color: '#aaa'
        }
    }    
})

const sizes = definePartsStyle({
    sm: {
        field: {
            borderRadius: '4px'
        }
    },
    md: {
        field: {
            borderRadius: '4px'
        }
    },
    lg: {
        field: {
            borderRadius: '4px'
        }
    }
})

export const InputStyles = defineMultiStyleConfig({ baseStyle, sizes });