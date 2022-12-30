import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttonStyles";
import { InputStyles as Input } from "./components/inputStyles";

export const myNewTheme = extendTheme({
    colors: {
        primary: '#0094FF',
        secondary: '#222222',
        success: '#0ACE49',
        warning: '#EDD623',
        info: '#52CFF5',
        danger: '#EB3E3E',
        light: '#f0f0f0'
    },
    components: {
        Button,
        Input
    }
})