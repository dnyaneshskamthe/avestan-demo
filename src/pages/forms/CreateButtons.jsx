
import {
    Card,
    CardBody,
    CardHeader,
    Icon,
    Center,
    Text,
    
    Grid,
    GridItem
  } from "@chakra-ui/react";
  import { EditIcon } from "@chakra-ui/icons";
export default function CreateButtons() {
  return (
    <div>
         <Grid templateColumns='repeat(6, 1fr)' gap={4} p="10px"  >
        <GridItem colSpan={3} w="300px" h="300px">
          <Card w="300px" mr="20px">
            <Center>
              <CardHeader>
                <Icon as={EditIcon} fontSize="50px" color="gray" />
              </CardHeader>
            </Center>
            <Center>
              <CardBody
                py="0px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Text textAlign="center" as="span" fontSize="1em">
                  Create Form
                </Text>
              </CardBody>
            </Center>
          </Card>
        </GridItem>

        <GridItem colSpan={3} w="300px" h="300px">
          <Card w="300px" mr="20px">
            <Center>
              <CardHeader>
                <Icon as={EditIcon} fontSize="50px" color="gray" />
              </CardHeader>
            </Center>
            <Center>
              <CardBody
                py="0px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Text textAlign="center" as="span" fontSize="1em">
                  Create Form
                </Text>
              </CardBody>
            </Center>
          </Card>
        </GridItem>

        <GridItem colSpan={3} h="400px">
          <Card w="300px" mr="20px">
            <Center>
              <CardHeader>
                <Icon as={EditIcon} fontSize="50px" color="gray" />
              </CardHeader>
            </Center>
            <Center>
              <CardBody
                py="0px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Text textAlign="center" as="span" fontSize="1em">
                  Create Form
                </Text>
              </CardBody>
            </Center>
          </Card>
        </GridItem>

        <GridItem colSpan={3} h="400px">
          <Card w="300px" mr="20px">
            <Center>
              <CardHeader>
                <Icon as={EditIcon} fontSize="50px" color="gray" />
              </CardHeader>
            </Center>
            <Center>
              <CardBody
                py="0px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Text textAlign="center" as="span" fontSize="1em">
                  Create Form
                </Text>
              </CardBody>
            </Center>
          </Card>
        </GridItem>

       
      </Grid>
    </div>
  )
}
