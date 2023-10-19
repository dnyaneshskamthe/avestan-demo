import { Button, Flex, HStack, Heading, Spacer, Text, Avatar} from "@chakra-ui/react";


export default function Navbar() {
  return (
    <div>
        <Flex as="nav" p="10px" bg="blue.900" alignItems="center" gap="5px" w={{base:"100vw", md:"82.5vw"}}>
            <Heading as="h1" color="white">Dashboard</Heading>
            <Spacer/>
            <HStack spacing="10px">
                <Avatar name='Dan Abrahmov' src='user.png' />
                <Text color="white">Priya Sharma</Text>
                <Button colorScheme="blue">Bell</Button>
            </HStack>
        </Flex>
    </div>
  )
}
