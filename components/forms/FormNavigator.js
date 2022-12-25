import styles from './FormNavigator.module.scss'

import DadosGeraisForm from './dados-gerais/DadosGeraisForm'
import ExameInicialForm from './exame-inicial/ExameInicialForm'

import { useState } from 'react'
import { Flex, Button } from '@chakra-ui/react'
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

export default function FormNavigator() {
  const [step, setStep] = useState(0)

  return (
    <div className={styles.formNavigatorContainer} direction={'column'}>
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
            <Button rightIcon={<DeleteIcon />} colorScheme="gray" size="sm">
              Limpar
            </Button>
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
                Próximo
              </Button>
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
