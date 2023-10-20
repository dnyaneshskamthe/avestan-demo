import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import SideBar from "../components/SideBar"


function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem 
        as="aside" 
        colSpan={{base:"1", md:"1"}}
        minWidth={{base:"20px"}}
        minHeight={{base:"100vh", md:"100vh", lg:"100vh" ,}}>
        <SideBar/>
      </GridItem>
      <GridItem 
        as="main"
        colSpan={{base:"5", md:"5"}}
        >
        <Navbar/>
        <Outlet/>
      </GridItem>
    </Grid>
  )
}

export default RootLayout