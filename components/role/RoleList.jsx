import { Flex, Link } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function RoleList({ roleList }) {
  const [roles, setRoles] = useState([])

  useEffect(() => {}, [])

  return (
    <Flex direction={'column'}>
      {roleList.map(user => {
        return (
          <Link href={`./roles/${user.role.name}`} key={user.role.name}>
            {user.role.name}
          </Link>
        )
      })}
    </Flex>
  )
}
