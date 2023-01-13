import {
  Flex,
  Box,
  Table,
  Tbody,
  Th,
  Td,
  Text,
  Thead,
  Tr,
  TableContainer,
  Input,
  Tfoot,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

import * as UserService from './service/UserService'
import RoleList from '../role/RoleList'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'

async function fetchUsers() {
  return (await UserService.list()).data
}

function Filter({ data, setData }) {
  const doFilter = e => {
    const dataFiltered = data.filter(user =>
      user.name
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim())
    )
    setData(dataFiltered)
  }
  return (
    <Input type="text" placeholder="Pesquisar..." onChange={e => doFilter(e)} />
  )
}

const ConfirmDelete = ({ isOpen, onConfirm, onClose }) => {
  const [show, setShow] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleClick = () => {
    setShow(!show)
  }

  const handleOnConfirm = () => {
    setConfirmPassword('')
    onConfirm()
  }

  const handleOnClose = () => {
    setConfirmPassword('')
    onClose(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody my={5}>
          <Flex direction={'column'}>
            <Text fontSize={'1.2rem'}>
              Confirma remoção do usuário selecionado?
            </Text>
            <Text fontSize={'0.8rem'} fontWeight={'500'}>
              Essa ação não poderá ser desfeita.
            </Text>
          </Flex>
          <Flex mt={10}>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Confirme com a senha"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick} mr={2}>
                  {show ? 'Ocultar' : 'Mostrar'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex>
            <Button
              colorScheme="red"
              mr={3}
              onClick={handleOnConfirm}
              disabled={!confirmPassword.length}
            >
              Confirmar
            </Button>
            <Button variant={'light'} mr={3} onClick={handleOnClose}>
              Fechar
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default function UserList() {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState()
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [userSelected, setUserSelected] = useState({})

  useEffect(() => {
    fetchUsers()
      .then(users => {
        setList(users)
        setFilteredList(users)
      })
      .catch(error => console.error('Erro', error))
  }, [])

  const selectForRemoval = user => {
    setConfirmDelete(true)
    setUserSelected(user)
  }

  const excluir = async () => {
    await UserService.remove(userSelected)
    fetchUsers()
      .then(users => {
        setList(users)
        setFilteredList(users)
        setConfirmDelete(false)
      })
      .catch(error => console.error('Erro', error))
  }

  return (
    <Flex direction={'column'} overflowY={'auto'} p={5}>
      <ConfirmDelete
        isOpen={confirmDelete}
        onConfirm={excluir}
        onClose={() => setConfirmDelete(false)}
      />
      <Flex overflowX={'auto'} direction={'column'}>
        <Box mb={5}>
          <Filter data={list} setData={setFilteredList} />
        </Box>
        <TableContainer m={5} maxWidth="900px" width="900px">
          <Table
            variant={'unstyled'}
            maxWidth={'900px'}
            fontSize={'0.9rem'}
            size={'sm'}
          >
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Criado em</Th>
                <Th>Atualizado em</Th>
                <Th>Permissões</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredList && filteredList.length ? (
                filteredList.map(user => {
                  return (
                    <Tr key={user.id}>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>{format(new Date(user.created_at), 'dd/mm/yyyy')}</Td>
                      <Td>{format(new Date(user.updated_at), 'dd/mm/yyyy')}</Td>
                      <Td>
                        <RoleList roleList={user.user_role} key={user.id} />
                      </Td>
                      <Td>
                        <Flex direction={'column'}>
                          <Button size={'xs'} variant={'light'} m={1}>
                            Editar
                          </Button>
                          <Button
                            size={'xs'}
                            variant={'danger'}
                            m={1}
                            onClick={() => selectForRemoval(user)}
                          >
                            Remover
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })
              ) : (
                <Tr>
                  <Td colSpan={6}>
                    <Text>Nenhum resultado encontrado</Text>
                  </Td>
                </Tr>
              )}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={6}>
                  <Flex justifyContent={'flex-end'} alignItems={'center'}>
                    <Text mr={1}>{list && (list.length || 0)}</Text>
                    <Text>usuários encontrados</Text>
                  </Flex>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  )
}
