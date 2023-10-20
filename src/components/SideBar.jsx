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
  useToast
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
  const toast = useToast()
  return (
    <div>
      <Container>
        <Center>
          <Box boxSize="100px" p="10px">
          <NavLink to="/">
            <Image src="logo.png" alt="Logo" />
          </NavLink>
          </Box>
        </Center>

        <List fontSize="1.2em" spacing={4} p="10px">
          <ListItem className="listItem" p="10px" borderRadius="10px">
            <NavLink to="/">
              <Button bg="blue.900" w="10px" mr="10px">
                <ListIcon as={BsGrid} color="white" ml="10px" />
              </Button>
              <Text as ="span" className="sidebar-text">Dashboard</Text>
            </NavLink>
          </ListItem>

          <Divider borderWidth="1px" borderColor={"gray"} />

          {/* <Accordion allowToggle p="0px" m="0px" borderWidth={0} position="absolute" left="0"> */}
          <div style={{ marginLeft: '-15px' }}>
          <Accordion allowToggle p="0px" m="0px" borderWidth={0}>
            <ListItem  p="10px" borderRadius="10px" m="0px">
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
                          <Text as ="span" className="sidebar-text" pl="10px" fontSize="15px">
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
                      <NavLink to="/create/createForm">
                        <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          <span className="rightIcon">
                          <Icon as={BsChevronRight} className="rightIcon" boxSize={4} mr="10px"/>
                          </span>
                            <Button bg="gray.200" w="10px" mr="10px">
                              <ListIcon as={BsAmd} color="gray.500" ml="10px" />
                            </Button>
                            <Text as ="span" className="sidebar-text" pl="10px" fontSize="14px" color="black">
                              Create Form
                            </Text>
                          
                        </ListItem>
                        </NavLink>
                        
                        <NavLink to="/create/createLedger">
                        <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          
                          <span className="rightIcon">
                          <Icon as={BsChevronRight} className="rightIcon" boxSize={4} mr="10px"/>
                          </span>
                            <Button bg="gray.200" w="10px" mr="10px">
                              <ListIcon
                                as={BsFileEarmarkSpreadsheet}
                                color="gray.500"
                                ml="10px"
                              />
                            </Button>
                            <Text as ="span" className="sidebar-text" pl="10px" fontSize="14px" color="black">
                              Career Ledger
                            </Text>
                          
                        </ListItem>
                        </NavLink>

                        <NavLink to="/create/createLoan">
                        <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          
                          <span className="rightIcon">
                          <Icon as={BsChevronRight} className="rightIcon" boxSize={4} mr="10px"/>
                          </span>
                            <Button bg="gray.200" w="10px" mr="10px">
                              <ListIcon
                                as={CiMoneyBill}
                                color="gray.500"
                                ml="10px"
                              />
                            </Button>
                            <Text as ="span" className="sidebar-text" pl="10px" fontSize="14px" color="black">
                              Create Loan
                            </Text>
                            </ListItem>
                          </NavLink>
                        
                          <NavLink to="/create/createLevel">
                        <ListItem
                          className="listItem"
                          p="10px"
                          borderRadius="10px"
                        >
                          
                          <span className="rightIcon">
                          <Icon as={BsChevronRight} className="rightIcon" boxSize={4} mr="10px"/>
                          </span>
                            <Button bg="gray.200" w="10px" mr="10px" width="20px">
                              <ListIcon
                                as={BsFillFileEarmarkSpreadsheetFill}
                                color="gray.500"
                                ml="10px"
                              />
                            </Button>
                            <Text as ="span" className="sidebar-text" pl="10px" fontSize="14px" color="black">
                              Create Level
                            </Text>
                            </ListItem>
                          </NavLink>
                        
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
          </div>

          <NavLink to="/career">
            <ListItem className="listItem" p="10px" borderRadius="10px">
            
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon as={BsAmd} color="gray.500" ml="10px" />
              </Button>
              <Text as ="span" className="sidebar-text"pl="10px" fontSize="15px">
                Career
              </Text>
          </ListItem>
          </NavLink>

          <NavLink to="/balancesheet">
            <ListItem className="listItem" p="10px" borderRadius="10px">
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon
                  as={BsFileEarmarkSpreadsheet}
                  color="gray.500"
                  ml="10px"
                />
              </Button>
              <Text as ="span" className="sidebar-text" pl="10px" fontSize="15px">
                Balancesheet
              </Text>
          </ListItem>
          </NavLink>

          <NavLink to="/profitloss">
            <ListItem className="listItem" p="10px" borderRadius="10px">            
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon as={CiMoneyBill} color="gray.500" ml="10px" />
              </Button>
              <Text as ="span" className="sidebar-text" pl="10px" fontSize="15px">
                Profit & Loss
              </Text>
          </ListItem>
          </NavLink>

          <NavLink to="/report">
            <ListItem className="listItem" p="10px" borderRadius="10px">
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon
                  as={BsFillFileEarmarkSpreadsheetFill}
                  color="gray.500"
                  ml="10px"
                />
              </Button>
              <Text as ="span" className="sidebar-text" pl="10px" fontSize="15px">
                Report
              </Text>
          </ListItem>
          </NavLink>

          <Divider borderWidth="1px" borderColor={"gray"} />

          <NavLink to="/help">
            <ListItem className="listItem" p="10px" borderRadius="10px">            
              <Button bg="gray.200" w="10px" mr="10px">
                <ListIcon as={BsFlagFill} color="gray.500" ml="10px" />
              </Button>
              <Text as ="span" className="sidebar-text" pl="10px" fontSize="15px">
                Help
              </Text>
             </ListItem>
             </NavLink>

          <ListItem className="listItem" p="10px" borderRadius="10px" 
          onClick={() =>
            toast({
              title: 'Logout',
              description: "You have sucessfully logged out",
              status: 'success',
              duration: 3000,
              position: "top",
              isClosable: true,
            })
          }
          >
            <Button bg="gray.200" w="10px" mr="10px">
              <ListIcon as={CiLogout} ml="10px" />
            </Button>

            <Text as ="span" className="sidebar-text" pl="10px" fontSize="15px">
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
                size={{base:"40px",sm:"50px", md:"100px"}}
              >
                <span className="footer-icon"><Icon as={WarningTwoIcon} ml="10px" mr="10px" /></span>
                <Text textAlign="center" as="span" padding={{base:"2px", md:"10px"}} fontSize={{base:"12px", md:"20px"}} mr="10px">
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
