import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '../context/ThemeContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  )
}
