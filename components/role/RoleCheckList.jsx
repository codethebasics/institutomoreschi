import { Checkbox, Flex } from '@chakra-ui/react'

export default function RoleCheckList2({ roles, onChange }) {
  const handleOnChange = roleId => {
    let _roles = [...roles]
    const role = _roles.find(role => role.id === roleId)
    role.checked = !role.checked
    _roles = _roles.filter(_role => _role.id !== role.id)
    _roles.push(role)
    _roles = sortRoles(_roles)
    onChange(_roles)
  }

  const sortRoles = _roles => {
    return _roles.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  }

  return (
    <Flex direction={'column'}>
      {roles && roles.length ? (
        roles.map(role => (
          <Checkbox
            key={role.id}
            disabled={!role.active}
            isChecked={role.checked}
            onChange={() => handleOnChange(role.id)}
          >
            {role.name}
          </Checkbox>
        ))
      ) : (
        <Checkbox disabled>Sem dados</Checkbox>
      )}
    </Flex>
  )
}
