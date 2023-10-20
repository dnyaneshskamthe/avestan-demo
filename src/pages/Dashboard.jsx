import {  Grid, GridItem, Button, Text, Avatar } from "@chakra-ui/react"


function Dashboard() {
  return (
    <div style={{padding:"50px"}}>
        <Grid templateRows="1fr 1fr" gap={4} >
          <GridItem p="50px" ml="20px">
            <Button bg="blue.900" color="white" fontSize="20px" m="20px" w="200px" h="70px" _hover={{bg:"purple.900", color:"white"}}>Create Company</Button>
          </GridItem>
          
          <GridItem colSpan={3} p="50px" m="20px">
          <Text fontSize="20px" fontWeight="bold" ml="20px">Companies</Text>
            <Button bg="blue.900" color="white" fontSize="20px" m="20px" w="200px" h="70px" _hover={{bg:"purple.900", color:"white"}}>
              <Avatar size="sm" name='avatar' src='logo.png' bg="white" p="5px" mr="10px"/>DSA</Button>
            <Button bg="blue.900" color="white" fontSize="20px" m="20px" w="200px" h="70px" _hover={{bg:"purple.900", color:"white"}}>
              <Avatar size="sm" name='avatar' src='logo.png' bg="white" p="5px" mr="10px"/> Nidhi Pvt Ltd</Button>
            <Button bg="blue.900" color="white" fontSize="20px" m="20px" w="200px" h="70px" _hover={{bg:"purple.900", color:"white"}}>
              <Avatar size="sm" name='avatar' src='logo.png' bg="white" p="5px" mr="10px"/>Nidhi Pvt Ltd</Button>
          </GridItem>
        </Grid>
    </div>
  )
}

export default Dashboard