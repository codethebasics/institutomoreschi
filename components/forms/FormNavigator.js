import styles from './FormNavigator.module.scss'

import DadosGeraisForm from './dados-gerais/DadosGeraisForm'
import ExameInicialForm from './exame-inicial/ExameInicialForm'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import { useState } from 'react'
import { Flex, Box, Button, Link, Tooltip } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons'

const Wizard = ({ step }) => {
  switch (step) {
    case 0:
      return <DadosGeraisForm />
    case 1:
      return <ExameInicialForm />
    default:
      return <DadosGeraisForm />
  }
}

const BackTop = () => {
  return (
    <Tooltip hasArrow label="Topo">
      <Box className={styles.backTop}>
        <Link href="#formNavigatorContainer">
          <ArrowUpwardIcon />
        </Link>
      </Box>
    </Tooltip>
  )
}

const ClearFormButton = ({ onClear }) => {
  return (
    <Button
      rightIcon={<DeleteIcon />}
      colorScheme="gray"
      size="sm"
      onClick={onClear}
    >
      Limpar
    </Button>
  )
}

export default function FormNavigator() {
  const [step, setStep] = useState(0)

  return (
    <Box
      className={styles.formNavigatorContainer}
      direction={'column'}
      id={'formNavigatorContainer'}
      pt={20}
    >
      <Wizard step={step} />
      <Flex
        className={styles.footer}
        position={'fixed'}
        bottom={'0px'}
        width={'100%'}
      >
        <Flex
          width={'100%'}
          maxWidth={'900px'}
          margin={'auto'}
          justifyContent={'space-between'}
        >
          <Flex>
            <ClearFormButton onClear={() => alert('limpando...')} />
          </Flex>
          <Flex justifyContent={'flex-end'} maxWidth={'900px'}>
            {step > 0 ? (
              <Button
                leftIcon={<ArrowBackIcon />}
                colorScheme="gray"
                size="sm"
                mr={5}
                onClick={() => setStep(0)}
              >
                Voltar
              </Button>
            ) : null}
            {step <= 1 ? (
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="blue"
                size="sm"
                onClick={() => setStep(1)}
              >
                Pr??ximo
              </Button>
            ) : null}
          </Flex>
        </Flex>
      </Flex>
      <BackTop />
    </Box>
  )
}
