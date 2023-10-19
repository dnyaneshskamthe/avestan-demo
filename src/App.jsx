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

// router and routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="/create/*" element={<Create/>}>
          {/* <Route
            path="/createForm"
            element={<CreateForm />}
          />
          <Route
            path="/createLedger"
            element={<CreateLedger />}
          />
          <Route
            path="/createLevel"
            element={<CreateLevel />}
          />
          <Route
            path="/createLoan"
            element={<CreateLoan />}
          />
          */}
          </Route> 
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
