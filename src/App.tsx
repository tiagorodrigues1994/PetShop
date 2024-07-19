import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout"


const router = createBrowserRouter([

  {
    element: <Layout />,
    children:[
      {
       path: '/',
       element: <Home />
      },
      {
        path:'/cart',
        element:<Cart />
      }
    ]

  }
])
 export {router};
