import { List, ListItem, Box, Image, Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function SideBar() {
  return (
    <div>
        <Container>
            <Box boxSize='100px' p="10px">
                <Image src='logo.png' alt='Logo'  />
            </Box>
       
        <List  fontSize="1.2em" spacing={4} p="10px">
            <ListItem>
                <NavLink to="/">
                    Dashboard
                </NavLink>
            </ListItem>

            <ListItem>
                <NavLink to="/create">
                    Create
                </NavLink>
            </ListItem>

            <ListItem>
                <NavLink to="/help">
                    Help
                </NavLink>
            </ListItem>
        </List>
        </Container>
    </div>
  )
}
