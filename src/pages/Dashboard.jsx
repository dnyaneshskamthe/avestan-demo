import {  Box, SimpleGrid } from "@chakra-ui/react"


function Dashboard() {
  return (
    <div>
        <SimpleGrid  spacing="5px" p="10px" minChildWidth="300px" >
            <Box bg="white" h="150px" border="1px solid"></Box>
            <Box bg="white" h="150px" border="1px solid"></Box>
            <Box bg="white" h="150px" border="1px solid"></Box>
            <Box bg="white" h="150px" border="1px solid"></Box>

            <Box bg="white" h="150px" border="1px solid"></Box>
            <Box bg="white" h="150px" border="1px solid"></Box>
            <Box bg="white" h="150px" border="1px solid"></Box>
            <Box bg="white" h="150px" border="1px solid"></Box>
        </SimpleGrid>
    </div>
  )
}

export default Dashboard