import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//import layouts and pages 
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Help from './pages/Help'
// import CreateForm from './pages/forms/CreateForm'
// import CreateLedger from './pages/forms/CreateLedger'
// import CreateLevel from './pages/forms/CreateLevel'
// import CreateLoan from './pages/forms/CreateLoan'
import CreateCompany from './pages/forms/CreateCompany'
import "./basic/basic.css"
import Career from './pages/career/Career'
import ProfitLoss from './pages/profitLoss/ProfitLoss'
import BalanceSheet from './pages/balanceSheet/BalanceSheet'
import Main from './pages/report/Main'

// router and routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        {/* <Route path="/dashboard/*" element={<Dashboard/>}></Route> */}
        <Route path="/createCompany" element={<CreateCompany/>}/>
        <Route path="/create/*" element={<Create/>}></Route> 
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/profitloss" element={<ProfitLoss/>}></Route>
        <Route path="/balancesheet" element={<BalanceSheet/>}></Route>
        <Route path="/report" element={<Main/>}></Route>
        <Route path="/help" element={<Help/>}></Route>
    </Route>
  )
)
function App() {
 
  return (
   <RouterProvider router={router}/>
  )
}

export default App
