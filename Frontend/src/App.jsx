
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home'
import AppLayout from './components/AppLayout'
import Course from './components/Course'
import Signup from './components/Signup'
import Contact from './components/Contact'

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/course",
          element: <Course/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
