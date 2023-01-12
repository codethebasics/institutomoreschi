import { mode } from '@chakra-ui/theme-tools'

export const ButtonStyles = {
  baseStyle: {
    borderRadius: '3px'
  },
  sizes: {},
  variants: {
    primary: props => ({
      bg: mode('primary', 'secondary')(props),
      color: '#fff',
      _hover: {
        opacity: 0.8
      }
    }),
    secondary: props => ({
      bg: mode('secondary', 'secondary')(props),
      color: '#fff',
      _hover: {
        opacity: 0.8
      }
    }),
    light: props => ({
      bg: mode('light', 'dark')(props),
      color: '#222',
      _hover: {
        opacity: 0.8
      }
    }),
    success: props => ({
      bg: mode('success', 'success')(props),
      color: '#fff',
      _hover: {
        opacity: 0.8
      }
    }),
    warning: props => ({
      bg: mode('warning', 'warning')(props),
      color: '#222',
      _hover: {
        opacity: 0.8
      }
    }),
    danger: props => ({
      bg: mode('danger', 'danger')(props),
      color: '#fff',
      _hover: {
        opacity: 0.8
      }
    })
  },
  defaultProps: {}
}
