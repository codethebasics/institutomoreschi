import {
  Flex,
  FormControl,
  FormLabel,
  Link,
  Text,
  Image,
  Tooltip,
  useToast
} from '@chakra-ui/react'

import { ThemeContext } from '../../../context/ThemeContext'
import styled from '@emotion/styled'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { useContext } from 'react'

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d1d1d1;
  box-shadow: inset 0px 4px 10px rgba(216, 216, 216, 0.25);
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  outline: none;
  color: #222;
  transition: all 0.2s;
  &:focus {
    border-color: #0094ff;
  }
  &::placeholder {
    color: #aaa;
  }
`

const setButtonStyleBackgroundColor = type => {
  switch (type) {
    case 'primary':
      return '#0094FF'
    case 'secondary':
      return '#222222'
    default:
      return '#F0F0F0'
  }
}

const setButtonStyleTextColor = type => {
  switch (type) {
    case 'primary':
      return '#FFFFFF'
    case 'secondary':
      return '#FFFFFF'
    default:
      return '#222222'
  }
}

const Button = styled.button`
  color: ${({ type }) => setButtonStyleTextColor(type)};
  background: ${({ type }) => setButtonStyleBackgroundColor(type)};
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 1.3rem;
  font-weight: 500;
  width: 100%;
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
  }
`

export default function SignInForm() {
  const toast = useToast()
  const { theme, setTheme } = useContext(ThemeContext)

  const message = (type, heading, text) => {
    toast({
      title: heading,
      description: text,
      status: type,
      duration: 5000,
      variant: 'subtle',
      position: 'top',
      isClosable: true
    })
  }

  return (
    <Flex justifyContent={'center'} p={5} height={'100%'}>
      <Flex
        direction={'column'}
        justifyContent={'space-around'}
        maxHeight={750}
      >
        <Flex direction={'column'} alignItems={'center'}>
          <Image height={100} src={'/img/tooth-logo.svg'} />
          <Flex>
            <Text
              fontWeight={'bold'}
              fontSize={'2rem'}
              textShadow={'0 3px 10px #ddd'}
            >
              Instituto&nbsp;
            </Text>
            <Text
              fontWeight={'bold'}
              fontSize={'2rem'}
              color={'#0094FF'}
              textShadow={'0 3px 10px #ddd'}
            >
              Moreschi
            </Text>
          </Flex>
        </Flex>
        <Flex direction={'column'} width={'100%'}>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" placeholder="seu@email.com" />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Senha</FormLabel>
            <Input type="password" placeholder="•••••••" />
          </FormControl>
          <FormControl mt={10}>
            <Flex direction={'column'} alignItems={'center'}>
              <Button
                type={'primary'}
                width={'100%'}
                onClick={() =>
                  message(
                    'info',
                    'Sistema indisponível',
                    'Sistema em manutenção. Tente novamente mais tarde'
                  )
                }
              >
                Entrar
              </Button>
              <Link mt={5}>Esqueci a senha</Link>
            </Flex>
          </FormControl>
        </Flex>
        <Flex direction={'column'} width={'100%'}>
          <FormControl>
            <Button width={'100%'}>Cadastro</Button>
          </FormControl>
          <Flex justifyContent={'center'} mt={5}>
            {theme === 'light' ? (
              <Tooltip label="Modo escuro">
                <DarkModeOutlinedIcon cursor={'pointer'} />
              </Tooltip>
            ) : (
              <Tooltip label="Modo claro">
                <LightModeOutlinedIcon cursor={'pointer'} />
              </Tooltip>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
