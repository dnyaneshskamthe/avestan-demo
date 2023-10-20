import { Spacer } from "@chakra-ui/react";
import Donut from "./Donut";
import Report from "./Report";
import ReportTable from "./ReportTable";


export default function Main() {
  return (
    <>
    <div>
        <Report/>
    </div>
    <div style={{display:"flex"}}>
        <ReportTable/>
        <Spacer/>
        <Donut/>
    </div>
    </>
  )
}
