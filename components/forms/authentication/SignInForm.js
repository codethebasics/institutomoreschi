import {
  Flex,
  FormControl,
  FormLabel,
  Link,
  Text,
  Image,
  Tooltip,
  useToast,
  Center,
  Stack,
  IconButton,
  Button
} from '@chakra-ui/react'

import styled from '@emotion/styled'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'


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

export default function SignInForm() {
  const toast = useToast()

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
                variant="primary" 
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
            </Flex>
            <Flex
                mt={5} 
                width={'100%'}
                justifyContent='space-between'
            >
                <Link>Esqueci a senha</Link>
                <Link>Registrar</Link>
            </Flex>
          </FormControl>
        </Flex>
        <Center>
            <Stack isInline>
                <Tooltip label="mudar tema">
                    <IconButton
                        icon={ <DarkModeOutlinedIcon /> }
                        variant="ghost"
                        colorScheme="blue"
                        aria-label="alterar tema"
                    >
                        Alterar tema
                    </IconButton>
                </Tooltip>
            </Stack>
        </Center>
      </Flex>
    </Flex>
  )
}
