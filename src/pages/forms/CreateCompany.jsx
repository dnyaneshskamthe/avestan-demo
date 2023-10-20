import { Box, Grid, GridItem, Input, FormControl, FormLabel, Text, Button, Container } from "@chakra-ui/react";


export default function CreateCompany() {
  return (
    <Container maxWidth="80%">
    <form>
      <Text fontWeight="extrabold" color="blue.900" mt="50px">Company Details</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} maxWidth="1000px">
        <GridItem colSpan={1} mt="10px">
          <Box p="4">
            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Company Name</FormLabel>
              <Input placeholder="Enter company name" />
            </FormControl>
            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Address</FormLabel>
              <Input as="textarea" placeholder="Enter company address" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">City</FormLabel>
              <Input placeholder="Enter city name" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Telephone  No</FormLabel>
              <Input placeholder="Enter telephone number" type="number"/>
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Email</FormLabel>
              <Input placeholder="Enter email" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Gst</FormLabel>
              <Input placeholder="Enter Gst number" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">License Name</FormLabel>
              <Input placeholder="Enter nameon License" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Pan Card</FormLabel>
              <Input placeholder="Enter PAN number" />
            </FormControl>
          </Box>
        </GridItem>
        <GridItem colSpan={1} mt="10px">
          <Box p="4">
            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Phone</FormLabel>
              <Input placeholder="Enter Phone number" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">State</FormLabel>
              <Input placeholder="Enter your state" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Pin code</FormLabel>
              <Input placeholder="Enter Pin code" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Mobile</FormLabel>
              <Input as="textarea" placeholder="Enter mobile number" />
            </FormControl>

            <FormControl mt="10px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">Website Address</FormLabel>
              <Input as="textarea" placeholder="Enter web URL" />
            </FormControl>
            
            <FormControl mt="85px" isRequired>
              <FormLabel color="blue.900" fontWeight="bold">
                License number
              </FormLabel>
              <Input as="textarea" placeholder="License number" />
              <Button bg="blue.900" color="white" _hover={{bg:"purple.900" , color:"white"}}>Add License</Button>
            </FormControl>
          </Box>
        </GridItem>
      </Grid>
      <Container >
        <Button w="200px" borderRadius="15px" fontSize="20px" bg="blue.900" color="white" _hover={{bg:"purple.900" , color:"white"}}>Submit</Button>
      </Container>
    </form>
    </Container>
  );
}
