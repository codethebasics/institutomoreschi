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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

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
              <MenuItem icon={<HomeOutlinedIcon />}>Início</MenuItem>
              <MenuItem icon={<DashboardOutlinedIcon />}>Dashboard</MenuItem>
              <MenuItem icon={<CalendarMonthIcon />}>Agenda</MenuItem>
              <MenuItem icon={<QueryStatsOutlinedIcon />}>Métricas</MenuItem>
              <MenuItem icon={<EventOutlinedIcon />}>Consultas</MenuItem>
              <MenuItem icon={<HistoryOutlinedIcon />}>Histórico</MenuItem>
              <MenuItem icon={<EmailOutlinedIcon />}>Mensagens</MenuItem>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup defaultValue='asc' title='Armazenar' type='radio'>
              <MenuItem icon={<CachedIcon />}>Salvar local</MenuItem>
              <MenuItem icon={<FilterDramaIcon />}>Salvar remoto</MenuItem>
            </MenuOptionGroup>            
            <MenuDivider />
            <MenuOptionGroup defaultValue='asc' title='Preferências' type='radio'>
              <MenuItem icon={<DarkModeOutlinedIcon />}>Modo escuro</MenuItem>
              <MenuItem icon={<SettingsOutlinedIcon />}>Configurações</MenuItem>
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
