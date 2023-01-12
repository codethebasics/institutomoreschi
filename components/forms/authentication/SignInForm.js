import {
  Flex,
  FormControl,
  FormLabel,
  Text,
  Image,
  useToast,
  IconButton,
  Button,
  Input,
  Divider
} from '@chakra-ui/react'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

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
          <Image
            height={100}
            src={'/img/tooth-logo.svg'}
            alt="Instituto Moreschi"
          />
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
              color={'primary'}
              textShadow={'0 3px 10px #ddd'}
            >
              Moreschi
            </Text>
          </Flex>
        </Flex>
        <Flex direction={'column'} width={'100%'}>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" placeholder="seu@email.com" size={'lg'} />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Senha</FormLabel>
            <Input type="password" placeholder="•••••••" size={'lg'} />
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
            <Divider orientation="horizontal" height={'15px'} py={2} />
            <Flex mt={5} width={'100%'} direction={'column'}>
              <Button mb={2} variant={'light'}>
                Esqueceu a senha
              </Button>
              <Button mb={2} variant={'light'}>
                Registrar
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  )
}
