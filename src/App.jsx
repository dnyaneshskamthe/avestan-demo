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

// router and routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
       <Route index element={<Dashboard/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
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
