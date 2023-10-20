import { Box, Flex, HStack, Heading, Spacer, Text, Avatar, Icon} from "@chakra-ui/react";
import { BsBell} from "react-icons/bs";
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Navbar() {
  return (
    <div>
        <Flex as="nav" p="10px" bg="blue.900" alignItems="center" gap="10px" w={{base:"100vw", md:"82.5vw"}}>
            <Heading as="h1" color="white">Dashboard</Heading>
            <Spacer/>
            <HStack spacing="10px" mr="0.7em">
                <Avatar name='Dan Abrahmov' src='user.png' />
                <Text color="white">Priya Sharma <Icon as={ChevronDownIcon} /></Text>
                <Box bg="white" borderRadius="50px" w="50px" h="50px"><Icon as={BsBell} mx="1em" my="1em" /></Box>
            </HStack>
        </Flex>
    </div>
  )
}
