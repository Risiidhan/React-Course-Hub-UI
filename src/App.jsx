import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import MainLayout from "./layout/mainLayout";
import CoursePage from "./pages/coursepage";
import NotFoundPage from "./pages/notFoundPage";
import AddCoursePage from "./pages/addCourse";

import CourseDetailPage, { courseLoader } from "./pages/courseDetailpage";
import EditCoursePage from "./pages/editCoursePage";


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

  const deleteCourse = async (id) => {
    const res = await fetch(`/api/${id}`, {
      method : 'DELETE',
    });
    return
  }

  const editCourse = async (updatedCourse) => {
    const res = await fetch(`/api/${updatedCourse.id}`, {
      method : 'PUT',
      headers : {
        'Context-Type' : 'application/json'
      },
      body : JSON.stringify(updatedCourse),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/:id" element={<CourseDetailPage deleteCourse={deleteCourse} />} loader={courseLoader} />
        <Route path="/add-course" element={<AddCoursePage submitCourse={addCourse} />} />
        <Route path="/edit-course/:id" element={<EditCoursePage submitCourse={editCourse} />} loader={courseLoader}/>
        <Route path="*" element={<NotFoundPage />} />

      </Route>
    )
  )
  return (<RouterProvider router={router} />)
}

export default App;