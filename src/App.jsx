import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import MainLayout from "./layout/mainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
    </Route>
  )
)
const App = () => {
  return (<RouterProvider router={router} /> )
}

export default App;