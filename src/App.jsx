import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import MainLayout from "./layout/mainLayout";
import CoursePage from "./pages/coursepage";
import NotFoundPage from "./pages/notFoundPage";
import AddCoursePage from "./pages/addCourse";
import { addCourse, editCourse, deleteCourse } from "./services/courseService";
import CourseDetailPage, { courseLoader } from "./pages/courseDetailpage";
import EditCoursePage from "./pages/editCoursePage";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/:id" element={<CourseDetailPage deleteCourse={deleteCourse} />} loader={courseLoader} />
        <Route path="/add-course" element={<AddCoursePage submitCourse={addCourse} />} />
        <Route path="/edit-course/:id" element={<EditCoursePage submitCourse={editCourse} />} loader={courseLoader} />
        <Route path="*" element={<NotFoundPage />} />

      </Route>
    )
  )
  return (<RouterProvider router={router} />)
}

export default App;