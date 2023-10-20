import { Center, SimpleGrid } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { GiMeepleGroup, GiReceiveMoney, GiLevelTwoAdvanced } from "react-icons/gi";
import CustomCard  from "./CustomCard"; // Import the CustomCard component

export default function CreateButtons() {
  return (
    <Center mt="20px">
      <div>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2 }}
        gap={4}
        p="10px"
        mt={{ base: "0px", sm: "50px" }}
      >
        <CustomCard title="Create Form" icon={EditIcon} to="/create/createForm" mb={{ base: "2px", sm: "0px" }} />
        <CustomCard title="Create Loan" icon={GiReceiveMoney} to="/create/createLoan" mb={{ base: "2px", sm: "0px" }} />
        <CustomCard title="Create Group" icon={GiMeepleGroup} to="/create/createLedger" mt={{ base: "2px", sm: "0px" }} />
        <CustomCard title="Create Level" icon={GiLevelTwoAdvanced} to="/create/createLevel" mt={{ base: "2px", sm: "0px" }} />
      </SimpleGrid>s
      </div>
    </Center>
  );
}
