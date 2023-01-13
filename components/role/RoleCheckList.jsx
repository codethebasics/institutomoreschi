import { Text, Checkbox, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import * as RoleService from './service/RoleService'

export default function RoleCheckList({ onChange }) {
  const [roles, setRoles] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const [rolesSelected, setRolesSelected] = useState([])

  useEffect(() => {
    setIsFetching(true)
    RoleService.list()
      .then(response => response.data)
      .then(data => setRoles(data))
      .finally(() => setIsFetching(false))
  }, [])

  const handleSelect = (role, e) => {
    const isChecked = e.target.checked
    let _roles = []

    isChecked
      ? (_roles = [...rolesSelected, role])
      : (_roles = rolesSelected.filter(r => r.id !== role.id))

    setRolesSelected(_roles)
    onChange(_roles)
  }

  return isFetching ? (
    <Text>Carregando...</Text>
  ) : (
    <Stack direction={'column'}>
      {roles.length &&
        roles.map(role => (
          <Checkbox
            key={role.id}
            value={role.name}
            onChange={e => handleSelect(role, e)}
          >
            {role.name}
          </Checkbox>
        ))}
    </Stack>
  )
}
