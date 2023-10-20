import { Box, Button, SimpleGrid,  Text, Icon } from "@chakra-ui/react";
import { AiOutlineRise } from "react-icons/ai"

export default function Report() {
  return (
    <SimpleGrid columns={{base:"2", sm  :"4"}}>
      <Box minWidth={{base:"50px",sm:"70px",md:"90px" , lg:"100px"}} minHeight={{base:"50px",sm:"70px",md:"90px" , lg:"130px"}} bg="white" m="10px" p="10px"  borderRadius="15px">
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <Text as="span" fontSize={{base:"0.5em",sm:"0.7em",md:"1em" , lg:"1.2em"}} margin="0.5em" pl="1em" >Saving</Text>
          <Button borderRadius="1em" bg="green.200" w={{base:"0.2em",sm:"1em",md:"4em" , lg:"5em"}}>
            <Icon as={AiOutlineRise}/>
          <Text as="span" fontSize={{base:"0.2em",sm:"0.3em",md:"0.5em" , lg:"0.7em"}} margin="0.2em">10.0 %</Text>
          </Button>
        </div>
        <Text fontSize={{base:"1em", sm:"1.2em", md:"1.5em"}} fontWeight="bold" pl="0.8em">856</Text>
        <Text fontSize={{base:"0.5em", sm:"0.7em", md:"1em"}} pl="1.4em" color="gray.600">Employee</Text>
      </Box>

      <Box minWidth={{base:"50px",sm:"70px",md:"90px" , lg:"100px"}} minHeight={{base:"50px",sm:"70px",md:"90px" , lg:"130px"}} bg="white" m="10px" p="10px"  borderRadius="15px">
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <Text as="span" fontSize={{base:"0.5em",sm:"0.7em",md:"1em" , lg:"1.2em"}} margin="0.5em" pl="1em" >Saving</Text>
          <Button borderRadius="1em" bg="green.200" w={{base:"0.2em",sm:"1em",md:"4em" , lg:"5em"}}>
            <Icon as={AiOutlineRise}/>
          <Text as="span" fontSize={{base:"0.2em",sm:"0.3em",md:"0.5em" , lg:"0.7em"}} margin="0.2em">10.0 %</Text>
          </Button>
        </div>
        <Text fontSize={{base:"1em", sm:"1.2em", md:"1.5em"}} fontWeight="bold" pl="0.8em">856</Text>
        <Text fontSize={{base:"0.5em", sm:"0.7em", md:"1em"}} pl="1.4em" color="gray.600">Employee</Text>
      </Box>

      <Box minWidth={{base:"50px",sm:"70px",md:"90px" , lg:"100px"}} minHeight={{base:"50px",sm:"70px",md:"90px" , lg:"130px"}} bg="white" m="10px" p="10px"  borderRadius="15px">
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <Text as="span" fontSize={{base:"0.5em",sm:"0.7em",md:"1em" , lg:"1.2em"}} margin="0.5em" pl="1em" >Saving</Text>
          <Button borderRadius="1em" bg="green.200" w={{base:"0.2em",sm:"1em",md:"4em" , lg:"5em"}}>
            <Icon as={AiOutlineRise}/>
          <Text as="span" fontSize={{base:"0.2em",sm:"0.3em",md:"0.5em" , lg:"0.7em"}} margin="0.2em">10.0 %</Text>
          </Button>
        </div>
        <Text fontSize={{base:"1em", sm:"1.2em", md:"1.5em"}} fontWeight="bold" pl="0.8em">856</Text>
        <Text fontSize={{base:"0.5em", sm:"0.7em", md:"1em"}} pl="1.4em" color="gray.600">Employee</Text>
      </Box>

      <Box minWidth={{base:"50px",sm:"70px",md:"90px" , lg:"100px"}} minHeight={{base:"50px",sm:"70px",md:"90px" , lg:"130px"}} bg="white" m="10px" p="10px"  borderRadius="15px">
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <Text as="span" fontSize={{base:"0.5em",sm:"0.7em",md:"1em" , lg:"1.2em"}} margin="0.5em" pl="1em" >Saving</Text>
          <Button borderRadius="1em" bg="green.200" w={{base:"0.2em",sm:"1em",md:"4em" , lg:"5em"}}>
            <Icon as={AiOutlineRise}/>
          <Text as="span" fontSize={{base:"0.2em",sm:"0.3em",md:"0.5em" , lg:"0.7em"}} margin="0.2em">10.0 %</Text>
          </Button>
        </div>
        <Text fontSize={{base:"1em", sm:"1.2em", md:"1.5em"}} fontWeight="bold" pl="0.8em">856</Text>
        <Text fontSize={{base:"0.5em", sm:"0.7em", md:"1em"}} pl="1.4em" color="gray.600">Employee</Text>
      </Box>
      
      
    </SimpleGrid>
  )
}
