import {  Grid, GridItem, Button, Text, Avatar } from "@chakra-ui/react"
import { Outlet, NavLink} from "react-router-dom";


function Dashboard() {
  return (
    <div style={{padding:"50px"}}>
        <Grid templateRows="1fr 1fr" gap={4} >
        <NavLink to="createCompany" m={{base:"5px", sm:"8px", md:"10px"}}>
          <GridItem p="50px" ml="20px" m={{base:"0px", sm:"5px", md:"10px"}} >
            <Button bg="blue.900" color="white"  m={{base:"5px", sm:"10px", md:"20px"}} fontSize={{sm:"12px", md:"20px"}} maxWidth={{base:"100px", md:"200px"}} h="70px" _hover={{bg:"purple.900", color:"white"}}>Create Company</Button>
          </GridItem>
          </NavLink>
          <GridItem colSpan={3} p="50px" m={{base:"5px", sm:"10px", md:"20px"}}>
          <Text fontSize="20px" fontWeight="bold" ml="20px">Companies</Text>
            <Button bg="blue.900" color="white" fontSize={{sm:"12px", md:"20px"}} maxWidth={{base:"100px", md:"200px"}} m="20px"  h="70px" _hover={{bg:"purple.900", color:"white"}}>
              <span className="btn-avatar"><Avatar size="sm" name='avatar' src='logo.png' bg="white" p="5px" mr="10px" /></span>DSA</Button>
              <Button bg="blue.900" color="white" fontSize={{sm:"12px", md:"20px"}} maxWidth={{base:"100px", md:"200px"}} m="20px"  h="70px" _hover={{bg:"purple.900", color:"white"}}>
              <span className="btn-avatar"><Avatar size="sm" name='avatar' src='logo.png' bg="white" p="5px" mr="10px" /></span> Nidhi Pvt Ltd</Button>
              <Button bg="blue.900" color="white" fontSize={{sm:"12px", md:"20px"}} maxWidth={{base:"100px", md:"200px"}} m="20px"  h="70px" _hover={{bg:"purple.900", color:"white"}}>
              <span className="btn-avatar"><Avatar size="sm" name='avatar' src='logo.png' bg="white" p="5px" mr="10px" /></span>Nidhi Pvt Ltd</Button>
          </GridItem>
        </Grid>
        <div>
      <Outlet />
    </div>
    </div>
  )
}

export default Dashboard