import { use, useCallback, useEffect, useMemo, useState } from 'react'
import UserCreateForm from '../components/forms/admin/user/UserCreateForm'
import RoleCheckList from '../components/role/RoleCheckList'
import AddUser from '../components/user/AddUser'
import UserList from '../components/user/UserList'
import { Box, Flex } from '@chakra-ui/react'

import * as UserService from '../components/user/service/UserService'
import * as RoleService from '../components/role/service/RoleService'
import RoleCheckList2 from '../components/role/RoleCheckList'

/**
 * ================
 * LIST / ADD USERS
 * ================
 */
function FormList() {
  return (
    <>
      <UserList />
      <AddUser />
    </>
  )
}

/**
 * ==========
 * FORM ROLES
 * ==========
 */
function FormRoleCheckList() {
  const [roles, setRoles] = useState([])

  const formatRoles = roles => {
    const response = roles.map(role => {
      return {
        key: role.id,
        id: role.id,
        name: role.name,
        active: true,
        checked: role.name === 'admin' || role.name === 'paciente'
      }
    })
    return response
  }

  useEffect(() => {
    RoleService.list()
      .then(response => setRoles(formatRoles(response.data)))
      .catch(e => console.error(e))
  }, [])

  return (
    <>
      <RoleCheckList2 roles={roles} onChange={setRoles} />
      <ul>
        {roles &&
          roles.map(role =>
            role.checked ? <li key={role.key}>{role.name}</li> : null
          )}
      </ul>
    </>
  )
}

/**
 * ======
 * RENDER
 * ======
 */
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
