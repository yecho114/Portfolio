import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider


} from 'react-router-dom'


// Layouts
import RootLayout from './layout/RootLayout.jsx'


// Pages
import Home from './Home.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} ></Route>
    </Route>
  )
)


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
