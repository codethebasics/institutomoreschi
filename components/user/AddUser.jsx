import { Button, Flex } from '@chakra-ui/react'

export default function AddUser() {
  return (
    <Flex justifyContent={'flex-end'}>
      <Button size={'sm'} variant={'success'}>
        Adicionar usuário
      </Button>
    </Flex>
  )
}
