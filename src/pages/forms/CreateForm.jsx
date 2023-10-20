import { Box, Grid, GridItem, Input, FormControl, FormLabel, Select, Button, Container, Text,Checkbox, Spacer } from "@chakra-ui/react";


export default function CreateForm() {
  return (
    <Container maxWidth="80%">
    <form>
      
      <FormControl mt="10px" isRequired p="4">
              <FormLabel color="blue.900" fontWeight="bold" mt="50px">Form Name</FormLabel>
              <Input placeholder="Enter form name" w="md"/>
            </FormControl>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} maxWidth="1000px">
        <GridItem colSpan={1} mt="10px">
          <Box p="4">
            <FormControl mt="10px" isRequired>
            <FormLabel color="blue.900" fontWeight="bold">Add Group</FormLabel>
              <Select placeholder='Select Group'>
                <option>GroupA</option>
                <option>GroupB</option>
              </Select>
            </FormControl>
            <Text mt="40px" fontWeight="bold" color="blue.900">Add Field</Text>            
          </Box>
        </GridItem>
        <GridItem colSpan={1} mt="10px">
          <Box p="4">
            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Add subgroup</FormLabel>
              <Select placeholder='Select subgroup'>
                <option>Sub-GroupA</option>
                <option>Sub-GroupB</option>
              </Select>
            </FormControl>
          </Box>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} maxWidth="1000px">
        <GridItem colSpan={1} mt="10px">
            <Box p="4">
              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Party Name</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Display Name</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Email Address</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Address</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Gst</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">State</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Pin Code</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Mobile number</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Update URL</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Account Holders Name</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>


              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Bank Name</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>


              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">IFSC code</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>
            </Box>
        </GridItem>

        <GridItem colSpan={1} mt="10px">
            <Box p="4">
              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Party Name</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Display Name</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Email Address</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Address</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Gst</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">State</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Pin Code</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Mobile number</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Update URL</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>

              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Account Holders Name</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>


              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">Bank Name</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>


              <FormControl mt="10px" isRequired>
              <Box display="flex" alignItems="center">
                <Box mr="2">IFSC code</Box>
                <Spacer/>
                <Checkbox iconColor="purple"colorScheme="purple" bg="gray.200"/>
              </Box>
              </FormControl>
            </Box>
        </GridItem>

          
      </Grid>
     
        <Button type="submit" w="200px" borderRadius="15px" ml="35%" mt="20px" mb="20px" fontSize="20px" bg="blue.900" color="white" _hover={{bg:"purple.900" , color:"white"}}>Create Form</Button>
     
    </form>
    </Container>
  )
}
