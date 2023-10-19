import { Outlet, Routes, Route,Navigate } from "react-router-dom";
import CreateForm from "./forms/CreateForm";
import CreateLedger from "./forms/CreateLedger";
import CreateLevel from "./forms/CreateLevel";
import CreateLoan from "./forms/CreateLoan";
import CreateButtons from "./forms/CreateButtons";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Icon,
//   Center,
//   Text,
  
//   Grid,
//   GridItem
// } from "@chakra-ui/react";
// import { EditIcon } from "@chakra-ui/icons";

function Create() {
  return (
    <div>
 
     

      <Routes>
        <Route path="/" element={<Navigate to='createButtons' />}/>
        <Route path="createButtons" element={<CreateButtons/>} />
        <Route path="createForm" element={<CreateForm />} />
        <Route path="createLedger" element={<CreateLedger />} />
        <Route path="createLevel" element={<CreateLevel />} />
        <Route path="createLoan" element={<CreateLoan />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Create;
