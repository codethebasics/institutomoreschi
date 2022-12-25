import styles from './ExameInicialForm.module.scss'

import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Switch
} from '@chakra-ui/react'

import PaletteIcon from '@mui/icons-material/Palette'
import FaceIcon from '@mui/icons-material/Face'

const FormAnamnese = () => {
  return (
    <Box className={styles.formAnamnese}>
      <Text fontSize="3xl" fontWeight={'bold'} mb={2}>
        Anamnese
      </Text>
      <Box className={styles.fields}>
        <FormControl>
          <FormLabel>Motivo da consulta</FormLabel>
          <Textarea resize={'none'} placeholder={''} variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Esta sobre tratamento médico?</FormLabel>
          <Switch />
        </FormControl>
        <FormControl>
          <Textarea resize={'none'} placeholder={'Qual?'} variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Toma algum medicamento?</FormLabel>
          <Switch />
        </FormControl>
        <FormControl>
          <Textarea resize={'none'} placeholder={'Quais?'} variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>
            Histórico de doenças da família (pai, mãe, irmãos)
          </FormLabel>
          <Textarea resize={'none'} variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Histórico médico</FormLabel>
          <Text fontWeight={'bold'} fontSize={'0.9rem'}>
            Já tem ou já teve:
          </Text>
          <Box mb={5}>
            <Text>Hipertensão, infarto ou outras doenças no coração?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva a doença'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Febre reumática?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Câncer?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva a tipo'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Diabetes (tipo 1 ou tipo 2)?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva a tipo'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Problemas relacionados à coagulação?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Já apresentou reação à penincilina?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva a reação'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Tem algum tipo de alergia?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Qual / Quais?'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Portador do vírus HIV?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Teve hemorragia?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Hepatite A, B ou C?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva o tipo'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Foi vacinado contra hepatite B?</Text>
            <Flex mt={4} direction={'column'}>
              <Switch mb={4} />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Algum problema hepático?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva o problema'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Algum problema hepático?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva o problema'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>
              Já tomou anestesia odontológica e apresentou alguma reação?
            </Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva a reação'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Está gestante? Quantas semanas?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Flex alignItems={'center'}>
                <Input
                  type={'number'}
                  width={75}
                  placeholder={0}
                  textAlign={'center'}
                  variant={'filled'}
                />
                <FormLabel mx={2} fontWeight={'normal'} color={'gray.500'}>
                  Semanas
                </FormLabel>
              </Flex>
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Já foi fumante? Por quanto tempo?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Flex alignItems={'center'}>
                <Input
                  type={'number'}
                  width={75}
                  placeholder={0}
                  textAlign={'center'}
                  variant={'filled'}
                />
                <FormLabel mx={2} fontWeight={'normal'} color={'gray.500'}>
                  Anos
                </FormLabel>
              </Flex>
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>É fumante? Qual a frequência?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva a frequência'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Consome álcool? Qual a frequência?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva a frequência'}
                variant={'filled'}
              />
            </Flex>
          </Box>
          <Box mb={5}>
            <Text>Faz uso de drogas?</Text>
            <Flex mt={4} direction={'column'}>
              <Box>
                <Switch mb={4} />
              </Box>
              <Textarea
                resize={'none'}
                placeholder={'Descreva a frequência'}
                variant={'filled'}
              />
            </Flex>
          </Box>
        </FormControl>
      </Box>
    </Box>
  )
}

const FormExameFisico = () => {
  return (
    <Box className={styles.formExameFisico}>
      <Text fontSize="3xl" fontWeight={'bold'} mb={2}>
        Exame Físico
      </Text>
      <Text fontSize="1xl" fontWeight={'bold'} mb={2}>
        Extra oral
      </Text>
      <Box className={styles.fields}>
        <FormControl>
          <FormLabel>Pele</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color={'gray.400'}>
              <PaletteIcon />
            </InputLeftElement>

            <Input variant={'filled'} />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Simetria facial</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color={'gray.400'}>
              <FaceIcon />
            </InputLeftElement>

            <Input variant={'filled'} />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Linfonodos</FormLabel>
          <Input variant={'filled'} />
        </FormControl>
      </Box>
      <Text fontSize="1xl" fontWeight={'bold'} mb={2}>
        Intra oral
      </Text>
      <Box className={styles.fields}>
        <FormControl>
          <FormLabel>Lábios</FormLabel>
          <Input variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Lingual</FormLabel>
          <Input variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Assoalho bucal</FormLabel>
          <Input variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Palato duro / Palato mole</FormLabel>
          <Input variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Mucosa jugal</FormLabel>
          <Input variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Mucosa aleolar</FormLabel>
          <Input variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Orafaringe / Retromolar</FormLabel>
          <Input variant={'filled'} />
        </FormControl>
        <FormControl>
          <FormLabel>Descrição da lesão (no caso de alterações)</FormLabel>
          <Textarea resize={'none'} variant={'filled'} />
        </FormControl>
      </Box>
    </Box>
  )
}

export default function ExameInicialForm() {
  return (
    <Flex className={styles.formContainer} direction="column">
      <Text fontSize="5xl" fontWeight={'bold'} mb={2}>
        Exame Inicial
      </Text>
      <FormAnamnese />
      <FormExameFisico />
    </Flex>
  )
}
