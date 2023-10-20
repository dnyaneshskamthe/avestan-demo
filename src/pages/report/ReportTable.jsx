import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  Text,
  Spacer,
  Button,
  Flex,
  Icon,
  Avatar
} from "@chakra-ui/react";

import { BsFilter } from 'react-icons/bs'

export default function ReportTable() {
    const data = [
        {
            id:"1",
            name :"Ajit",
            department:"Marketng",
            age:'30',
            descipline:"+100%",
            status:"Permanent",
            avatar:"user.png"
        },
        {   id:"2",
            name :"Ajit",
            department:"Marketng",
            age:'30',
            descipline:"+100%",
            status:"Permanent",
            avatar:"user.png"
        },
        {   id:"3",
            name :"Ajit",
            department:"Marketng",
            age:'30',
            descipline:"+100%",
            status:"Permanent",
            avatar:"user.png"
        }
]
  return (
    <Card w='75%' ml="0.7em" p="1em">
        <Flex>
        <Text fontWeight="bold" fontSize="1.3em" color="blackAlpha.900">Employee Status</Text>
        <Spacer/>
        <Button color="blue.900" bg="gray.300">
            <Text as="span">Filter & Sort</Text>
            <Icon as={BsFilter} ml="0.5em" /></Button>
        </Flex>
        <TableContainer mt="0.5em">
        <Table variant="simple">
            <Thead>
            <Tr>
                <Th>Employee Name</Th>
                <Th>Department</Th>
                <Th>Age</Th>
                <Th>Descipline</Th>
                <Th>Status</Th>
            </Tr>
            </Thead>
            <Tbody>
                {data.map((item)=>{
                    return(
                    <Tr key={item.id}>
                    <Td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={item.avatar} alt={item.name} />
                        {item.name}
                    </div>
                    </Td>
                    <Td>{item.department}</Td>
                    <Td>{item.age}</Td>
                    <Td>{item.descipline}</Td>
                    <Td>{item.status}</Td>
                    </Tr>
                    )

                })}
            
            </Tbody>
        </Table>
        </TableContainer>
    </Card>
  );
}
