import { ChakraProvider } from '@chakra-ui/react'
import { myNewTheme } from '../styles/theme'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myNewTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
