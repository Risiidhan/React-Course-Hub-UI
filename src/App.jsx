import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import MainLayout from "./layout/mainLayout";
import CoursePage from "./pages/coursepage";
import NotFoundPage from "./pages/notFoundPage";
import AddCoursePage from "./pages/addCourse";

import CourseDetailPage, { courseLoader } from "./pages/courseDetailpage";


const App = () => {
  const addCourse = async (newCourse) => {
    const res = await fetch('/api', {
      method : 'POST',
      headers : {
        'Context-Type' : 'application/json'
      },
      body : JSON.stringify(newCourse),
    });
    return
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/:id" element={<CourseDetailPage />} loader={courseLoader} />
        <Route path="/add-course" element={<AddCoursePage submitCourse={addCourse} />} />
        <Route path="*" element={<NotFoundPage />} />

      </Route>
    )
  )
  return (<RouterProvider router={router} />)
}

export default App;