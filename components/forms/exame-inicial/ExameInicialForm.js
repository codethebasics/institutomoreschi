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
  Switch,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'

import PaletteIcon from '@mui/icons-material/Palette'
import FaceIcon from '@mui/icons-material/Face'

export default function ExameInicialForm() {
  return (
    <Flex className={styles.formContainer} direction="column">
      <Text fontSize="5xl" fontWeight={'bold'} mb={2}>
        Exame Inicial
      </Text>
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
            <Textarea
              resize={'none'}
              placeholder={'Qual?'}
              variant={'filled'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Toma algum medicamento?</FormLabel>
            <Switch />
          </FormControl>
          <FormControl>
            <Textarea
              resize={'none'}
              placeholder={'Quais?'}
              variant={'filled'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              Histórico de doenças da família (pai, mãe, irmãos)
            </FormLabel>
            <Textarea resize={'none'} variant={'filled'} />
          </FormControl>
          <FormControl>
            <FormLabel>Histórico médico</FormLabel>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th colSpan={2}>Tem ou já teve</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Box>
                        Hipertensão, infarto ou outras doenças no coração?
                      </Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva a doença'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Febre reumática?</Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Câncer?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva a tipo'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Diabetes (tipo 1 ou tipo 2)?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva a tipo'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Problemas relacionados à coagulação?</Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Já apresentou reação à penincilina?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva a reação'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Tem algum tipo de alergia?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Qual / Quais?'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Portador do vírus HIV?</Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Teve hemorragia?</Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Hepatite A, B ou C?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva o tipo'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Foi vacinado contra hepatite B?</Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Algum problema hepático?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva o problema'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Algum problema hepático?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva o problema'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>
                        Já tomou anestesia odontológica e apresentou alguma
                        reação?
                      </Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva a reação'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Está gestante? Quantas semanas?</Box>
                      <Box mt={4}>
                        <Flex alignItems={'center'}>
                          <Input
                            type={'number'}
                            width={75}
                            placeholder={0}
                            textAlign={'center'}
                            variant={'filled'}
                          />
                          <FormLabel
                            mx={2}
                            fontWeight={'normal'}
                            color={'gray.500'}
                          >
                            Semanas
                          </FormLabel>
                        </Flex>
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Já foi fumante? Por quanto tempo?</Box>
                      <Box mt={4}>
                        <Flex alignItems={'center'}>
                          <Input
                            type={'number'}
                            width={75}
                            placeholder={0}
                            textAlign={'center'}
                            variant={'filled'}
                          />
                          <FormLabel
                            mx={2}
                            fontWeight={'normal'}
                            color={'gray.500'}
                          >
                            Anos
                          </FormLabel>
                        </Flex>
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>É fumante? Qual a frequência?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva a frequência'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Consome álcool? Qual a frequência?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva a frequência'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Box>Faz uso de drogas?</Box>
                      <Box mt={4}>
                        <Textarea
                          resize={'none'}
                          placeholder={'Descreva a frequência'}
                          variant={'filled'}
                        />
                      </Box>
                    </Td>
                    <Td textAlign={'center'}>
                      <Switch />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </FormControl>
        </Box>
      </Box>
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
    </Flex>
  )
}
