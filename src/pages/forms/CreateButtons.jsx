import { Center, Grid, GridItem, Card, CardHeader, Icon, Text, CardBody } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { GiMeepleGroup, GiReceiveMoney,GiLevelTwoAdvanced } from "react-icons/gi";
import { NavLink } from "react-router-dom";
export default function CreateButtons() {
  return (
    <Center mt="20px">
      <div >
          <Grid templateColumns='repeat(6, 1fr)' gap={4} p="10px"  >
          <GridItem colSpan={3} w="300px" h="300px">
            <NavLink to="/create/createForm">
            <Card w="200px" h="200px" bg="gray.200" mr="5px" _hover={{bg:"blue.700"}}>
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
                  <Text textAlign="center" as="span" fontSize="1.5em" color="black" fontWeight="bold" _hover={{color:"white"}}>
                    Create Form
                  </Text>
                </CardBody>
              </Center>
            </Card>
            </NavLink>
          </GridItem>

          <GridItem colSpan={3} w="300px" h="300px">
          <NavLink to="/create/createLedger">
            <Card w="200px" h="200px" bg="gray.200" mr="20px" _hover={{bg:"blue.700"}}>
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
                  <Text textAlign="center" as="span" fontSize="1.5em" color="black" fontWeight="bold" _hover={{color:'white'}}>
                    Create Group
                  </Text>
                </CardBody>
              </Center>
            </Card>
            </NavLink>
          </GridItem>

          <GridItem colSpan={3} h="400px">
            <NavLink to="/create/createLoan">
            <Card w="200px" h="200px" bg="gray.200" mr="20px" _hover={{bg:"blue.700"}}>
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
                  <Text textAlign="center" as="span" fontSize="1.5em" color="black" fontWeight="bold" _hover={{color:"white"}}>
                    Create Loan
                  </Text>
                </CardBody>
              </Center>
            </Card>
            </NavLink>
          </GridItem>

          <GridItem colSpan={3} h="400px">
            <NavLink to="/create/createLevel">
            <Card w="200px" h="200px" bg="gray.200" mr="20px" _hover={{bg:"blue.700"}}>
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
                  <Text textAlign="center" as="span" fontSize="1.5em" color="black" fontWeight="bold" _hover={{color:"white"}}>
                    Create Level
                  </Text>
                </CardBody>
              </Center>
            </Card>
            </NavLink>
          </GridItem>

        
        </Grid>
      </div>
    </Center>
  )
}
