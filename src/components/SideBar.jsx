import {
  List,
  ListItem,
  Box,
  Image,
  Container,
  ListIcon,
  Icon,
  Button,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AddIcon, MinusIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
  BsGrid,
  BsFlagFill,
  BsFileEarmarkSpreadsheet,
  BsAmd,
  BsFillFileEarmarkSpreadsheetFill,
  BsChevronRight
} from "react-icons/bs";
import { CiLogout, CiMoneyBill } from "react-icons/ci";

export default function SideBar() {
  return (
    <div>
      <Container>
        <Box boxSize="100px" p="10px">
          <Image src="logo.png" alt="Logo" />
        </Box>

        <List fontSize="1.2em" spacing={4} p="10px">
          <ListItem className="listItem" p="10px" borderRadius="10px">
            <NavLink to="/">
              <Button bg="blue.900" w="10px" mr="10px">
                <ListIcon as={BsGrid} color="white" ml="10px" />
              </Button>
              Dashboard
            </NavLink>
          </ListItem>

          <Divider borderWidth="1px" borderColor={"gray"} />
          <Accordion allowToggle p="0px" m="0px">
            <ListItem className="listItem" p="10px" borderRadius="10px" m="0px">
              <NavLink to="/create">
                <AccordionItem _hover={{ bg: "white" }}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton
                          _expanded={{ bg: "blue.900", color: "white" }}
                        >
                          <Button bg="gray.200" w="10px" mr="10px" ml="0px">
                            <ListIcon as={AddIcon} color="gray.500" ml="10px" />
                          </Button>
                          <Text as="span" pl="10px" fontSize="15px">
                            Create
                          </Text>
                          {isExpanded ? (
                            <MinusIcon ml="20px" />
                          ) : (
                            <AccordionIcon ml="20px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          <NavLink to="/create">
                          <Icon as={BsChevronRight}  fontSize="15px" mr="10px"/>
                            <Button bg="gray.200" w="10px" mr="10px">
                              <ListIcon as={BsAmd} color="gray.500" ml="10px" />
                            </Button>
                            <Text as="span" pl="10px" fontSize="14px" color="black">
                              Create Form
                            </Text>
                          </NavLink>
                        </ListItem>

                        <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          <NavLink to="/create">
                          <Icon as={BsChevronRight}  fontSize="15px" mr="10px"/>
                            <Button bg="gray.200" w="10px" mr="10px">
                              <ListIcon
                                as={BsFileEarmarkSpreadsheet}
                                color="gray.500"
                                ml="10px"
                              />
                            </Button>
                            <Text as="span" pl="10px" fontSize="14px" color="black">
                              Career Ledger
                            </Text>
                          </NavLink>
                        </ListItem>

                        <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          <NavLink to="/create">
                          <Icon as={BsChevronRight}  fontSize="15px" mr="10px"/>
                            <Button bg="gray.200" w="10px" mr="10px">
                              <ListIcon
                                as={CiMoneyBill}
                                color="gray.500"
                                ml="10px"
                              />
                            </Button>
                            <Text as="span" pl="10px" fontSize="14px" color="black">
                              Create Loan
                            </Text>
                          </NavLink>
                        </ListItem>

                        <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          <NavLink to="/create">
                          <Icon as={BsChevronRight}  fontSize="15px" mr="10px"/>
                            <Button bg="gray.200" w="10px" mr="10px" width="20px">
                              <ListIcon
                                as={BsFillFileEarmarkSpreadsheetFill}
                                color="gray.500"
                                ml="10px"
                              />
                            </Button>
                            <Text as="span" pl="10px" fontSize="14px" color="black">
                              Create Level
                            </Text>
                          </NavLink>
                        </ListItem>

                        <Divider borderWidth="1px" borderColor={"gray"} />

                        {/* <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          <NavLink to="/help">
                            <Button bg="gray.200" w="10px" mr="10px">
                              <ListIcon
                                as={BsFlagFill}
                                color="gray.500"
                                ml="10px"
                              />
                            </Button>
                            <Text as="span" pl="10px" fontSize="15px">
                              Help
                            </Text>
                          </NavLink>
                        </ListItem> */}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </NavLink>
            </ListItem>
          </Accordion>

          <ListItem className="listItem" p="10px" borderRadius="10px">
            <NavLink to="/create">
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon as={BsAmd} color="gray.500" ml="10px" />
              </Button>
              <Text as="span" pl="10px" fontSize="15px">
                Career
              </Text>
            </NavLink>
          </ListItem>

          <ListItem className="listItem" p="10px" borderRadius="10px">
            <NavLink to="/create">
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon
                  as={BsFileEarmarkSpreadsheet}
                  color="gray.500"
                  ml="10px"
                />
              </Button>
              <Text as="span" pl="10px" fontSize="15px">
                Balancesheet
              </Text>
            </NavLink>
          </ListItem>

          <ListItem className="listItem" p="10px" borderRadius="10px">
            <NavLink to="/create">
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon as={CiMoneyBill} color="gray.500" ml="10px" />
              </Button>
              <Text as="span" pl="10px" fontSize="15px">
                Profit & Loss
              </Text>
            </NavLink>
          </ListItem>

          <ListItem className="listItem" p="10px" borderRadius="10px">
            <NavLink to="/create">
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon
                  as={BsFillFileEarmarkSpreadsheetFill}
                  color="gray.500"
                  ml="10px"
                />
              </Button>
              <Text as="span" pl="10px" fontSize="15px">
                Report
              </Text>
            </NavLink>
          </ListItem>

          <Divider borderWidth="1px" borderColor={"gray"} />

          <ListItem className="listItem" p="10px" borderRadius="10px">
            <NavLink to="/help">
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon as={BsFlagFill} color="gray.500" ml="10px" />
              </Button>
              <Text as="span" pl="10px" fontSize="15px">
                Help
              </Text>
            </NavLink>
          </ListItem>

          <ListItem className="listItem" p="10px" borderRadius="10px">
            <Button bg="gray.200" w="10px" mr="10px">
              <ListIcon as={CiLogout} ml="10px" />
            </Button>

            <Text as="span" pl="10px" fontSize="15px">
              Logout
            </Text>
          </ListItem>
        </List>

        <Card bg="gray.300" m="10px" p="0px" maxWidth="200px">
          <Center>
            <CardHeader pb="0px">
              <Text
                as="span"
                fontSize="15px"
                color="blue.900"
                fontWeight="bold"
              >
                Found a bug?
              </Text>
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
              <Text textAlign="center" as="span" fontSize="10px">
                Report now to us if you find any bugs
              </Text>
            </CardBody>
          </Center>
          <Center>
            <CardFooter p="2px" mb="10px">
              <Button
                bg="blue.900"
                color="white"
                _hover={{ color: "white", bg: "blue.900" }}
              >
                <Icon as={WarningTwoIcon} ml="10px" mr="10px" />
                <Text textAlign="center" as="span" fontSize="xs" mr="10px">
                  Report
                </Text>
              </Button>
            </CardFooter>
          </Center>
        </Card>
      </Container>
    </div>
  );
}
