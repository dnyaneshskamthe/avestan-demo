import { Box, Center, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function CustomCard({ title, icon, to }) {
  return (
    <NavLink to={to}>
      <Box
        h={{ base: "30px", sm: "50px", md: "100px", lg: "12em" }}
        w={{ base: "100%", sm: "100%", md: "50%", lg: "12em" }}
        bg="gray.200"
        mr={{ base: "0", sm: "5px", md: "20px", lg: "20px" }}
        _hover={{ bg: "blue.700" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="1em"
      >
        <Center
          mt={{ base: "0px", sm: "10px", md: "20px", lg: "30px" }}
        >
          <Icon
            as={icon}
            boxSize={{ base: "0.5em", sm: "1em", md: "1.5em", lg: "2em" }}
            color="gray"
          />
        </Center>
        <Text
          textAlign="center"
          as="span"
          fontSize={{ base: "0.2em", sm: "0.5em", md: "1em", lg: "1.5em" }}
          color="black"
          fontWeight="bold"
          _hover={{ color: "white" }}
        >
          {title}
        </Text>
      </Box>
    </NavLink>
  );
}

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
};

export default CustomCard;
