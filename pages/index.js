import UserCreateForm from '../components/forms/admin/user/UserCreateForm'
import AddUser from '../components/user/AddUser'
import UserList from '../components/user/UserList'
import { Box, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className="mainWrapper">
      <Flex direction={'column'}>
        <Box margin={'auto'}>
          <UserList />
          <AddUser />
        </Box>
      </Flex>
    </div>
  )
}
