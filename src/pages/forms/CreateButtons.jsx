import { Center, Grid, GridItem, Card, CardHeader, Icon, Text, CardBody } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { GiMeepleGroup, GiReceiveMoney,GiLevelTwoAdvanced } from "react-icons/gi";
export default function CreateButtons() {
  return (
    <Center mt="20px">
      <div >
          <Grid templateColumns='repeat(6, 1fr)' gap={4} p="10px"  >
          <GridItem colSpan={3} w="300px" h="300px">
            <Card w="200px" h="200px" bg="gray.200" mr="5px">
              <Center mt="30px">
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
                  <Text textAlign="center" as="span" fontSize="1.5em" color="black" fontWeight="bold">
                    Create Form
                  </Text>
                </CardBody>
              </Center>
            </Card>
          </GridItem>

          <GridItem colSpan={3} w="300px" h="300px">
            <Card w="200px" h="200px" bg="gray.200" mr="20px">
              <Center mt="30px">
                <CardHeader>
                  <Icon as={GiMeepleGroup} fontSize="50px" color="gray" />
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
                  <Text textAlign="center" as="span" fontSize="1.5em" color="black" fontWeight="bold">
                    Create Group
                  </Text>
                </CardBody>
              </Center>
            </Card>
          </GridItem>

          <GridItem colSpan={3} h="400px">
            <Card w="200px" h="200px" bg="gray.200" mr="20px">
              <Center mt="30px">
                <CardHeader>
                  <Icon as={GiReceiveMoney} fontSize="50px" color="gray" />
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
                  <Text textAlign="center" as="span" fontSize="1.5em" color="black" fontWeight="bold">
                    Create Loan
                  </Text>
                </CardBody>
              </Center>
            </Card>
          </GridItem>

          <GridItem colSpan={3} h="400px">
            <Card w="200px" h="200px" bg="gray.200" mr="20px">
              <Center mt="30px">
                <CardHeader>
                  <Icon as={GiLevelTwoAdvanced} fontSize="50px" color="gray" />
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
                  <Text textAlign="center" as="span" fontSize="1.5em" color="black" fontWeight="bold">
                    Create Level
                  </Text>
                </CardBody>
              </Center>
            </Card>
          </GridItem>

        
        </Grid>
      </div>
    </Center>
  )
}
