import styles from './DadosGeraisForm.module.scss'

import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  Textarea,
  Switch,
  Box,
  Center,
  Divider,
  InputGroup,
  InputLeftElement,
  Button
} from '@chakra-ui/react'

import { PhoneIcon, ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import MailIcon from '@mui/icons-material/Mail'
import BadgeIcon from '@mui/icons-material/Badge'
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'
import CakeIcon from '@mui/icons-material/Cake'
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus'
import AbcIcon from '@mui/icons-material/Abc'

export default function DadosGeraisForm() {
  return (
    <Flex className={styles.formContainer} direction="column">
      <Text fontSize="5xl" fontWeight={'bold'} mb={2}>
        Dados Gerais
      </Text>
      <Box className={styles.formDadosGerais}>
        <Text fontSize="3xl" fontWeight={'bold'} mb={2}>
          Dados do paciente
        </Text>
        <Box className={styles.fields}>
          <FormControl>
            <FormLabel>Nome do paciente</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color={'gray.400'}>
                <AbcIcon />
              </InputLeftElement>
              <Input variant={'filled'} type="number" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Telefone</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type="tel"
                variant="filled"
                placeholder="(00) 0 0000 0000"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Data de nascimento</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color={'gray.400'}>
                <CakeIcon />
              </InputLeftElement>
              <Input type="date" variant={'filled'} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Idade</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color={'gray.400'}>
                <Filter9PlusIcon />
              </InputLeftElement>
              <Input variant={'filled'} type="number" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Nome do responsável</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color={'gray.400'}>
                <EscalatorWarningIcon />
              </InputLeftElement>
              <Input variant={'filled'} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>CPF</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color={'gray.400'}>
                <BadgeIcon />
              </InputLeftElement>
              <Input variant={'filled'} placeholder={'000.000.000-00'} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color={'gray.400'}>
                <MailIcon />
              </InputLeftElement>
              <Input
                variant={'filled'}
                type="email"
                placeholder={'meu@email.com'}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Possui convênio?</FormLabel>
            <Switch />
          </FormControl>
          <FormControl>
            <FormLabel>Número do convênio</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color={'gray.400'}>
                <MedicalInformationIcon />
              </InputLeftElement>
              <Input variant={'filled'} placeholder={'0000000'} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Observações</FormLabel>
            <Textarea
              resize={'none'}
              variant={'filled'}
              placeholder={'Deseja acrescentar alguma informação?'}
            />
          </FormControl>
        </Box>
      </Box>
    </Flex>
  )
}
