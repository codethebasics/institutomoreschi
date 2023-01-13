import { useEffect, useState } from 'react'
import UserCreateForm from '../components/forms/admin/user/UserCreateForm'
import RoleCheckList from '../components/role/RoleCheckList'
import AddUser from '../components/user/AddUser'
import UserList from '../components/user/UserList'
import { Box, Flex } from '@chakra-ui/react'

function FormList() {
  return (
    <>
      <UserList />
      <AddUser />
    </>
  )
}

function FormRoleCheckList() {
  const [rolesChecked, setRolesChecked] = useState([])

  return (
    <>
      <RoleCheckList onChange={setRolesChecked} />
    </>
  )
}

export default function Home() {
  return (
    <div className="mainWrapper">
      <Flex direction={'column'}>
        <Box margin={'auto'}>
          <FormRoleCheckList />
        </Box>
      </Flex>
    </div>
  )
}
