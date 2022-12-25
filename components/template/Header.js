import { Box, Flex, Text } from '@chakra-ui/react'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header({ title }) {
  return (
    <Flex
      position={'fixed'}
      backgroundColor={'#fff'}
      width={'100%'}
      padding={'15px'}
      zIndex={3}
      borderBottom={'1px solid #ddd'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Text>{title}</Text>
      <Box>
        <MenuIcon />
      </Box>
    </Flex>
  )
}
