import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttonStyles";

export const myNewTheme = extendTheme({
    colors: {
        primary: '#0094FF',
        secondary: '#222222',
        success: '#0ACE49',
        warning: '#EDD623',
        info: '#52CFF5',
        danger: '#EB3E3E'
    },
    components: {
        Button
    }
})