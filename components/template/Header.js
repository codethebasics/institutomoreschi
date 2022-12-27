import { Box, Flex, Text } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuOptionGroup
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import HomeIcon from '@mui/icons-material/Home';
import CachedIcon from '@mui/icons-material/Cached';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header({ title }) {
  return (
    <Flex
      position={'fixed'}
      backgroundColor={'#fff'}
      width={'100%'}
      padding={'15px'}
      zIndex={3}
      borderBottom={'1px solid #ddd'}      
    >
      <Flex
        width={'100%'}
        maxWidth={'900px'}
        justifyContent={'space-between'}
        alignItems={'center'}
        margin={'auto'}
      >
        <Text>{title}</Text>
        <Box>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.100' }}
            _expanded={{ bg: 'blue.400', color: '#fff' }}
            _focus={{ boxShadow: 'outline' }}
          >
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuOptionGroup defaultValue='asc' title='Ir para' type='radio'>
              <MenuItem icon={<HomeIcon />}>Início</MenuItem>
              <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
              <MenuItem icon={<CalendarMonthIcon />}>Agenda</MenuItem>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup defaultValue='asc' title='Armazenar' type='radio'>
              <MenuItem icon={<CachedIcon />}>Salvar local</MenuItem>
              <MenuItem icon={<FilterDramaIcon />}>Salvar remoto</MenuItem>
            </MenuOptionGroup>            
            <MenuDivider />
            <MenuOptionGroup defaultValue='asc' title='Preferências' type='radio'>
              <MenuItem icon={<DarkModeIcon />}>Modo escuro</MenuItem>
              <MenuItem icon={<SettingsIcon />}>Configurações</MenuItem>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuItem icon={<LogoutIcon />}>Sair</MenuItem>
          </MenuList>
        </Menu>
        </Box>
      </Flex>
    </Flex>
  )
}
