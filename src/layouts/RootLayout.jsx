import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import SideBar from "../components/SideBar"


function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.200">
      <GridItem 
        as="aside" 
        colSpan={{base:"6", md:"1"}}
        minHeight={{base:"50px", md:"50px", lg:"100vh" ,}}>
        <SideBar/>
      </GridItem>
      <GridItem 
        as="main"
        colSpan={{base:"6", md:"5"}}
        >
        <Navbar/>
        <Outlet/>
      </GridItem>
    </Grid>
  )
}

export default RootLayout