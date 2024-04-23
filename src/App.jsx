import CardContainer from "./components/cardContainer";
import CourseListContainer from "./components/courseListContainer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ViewAllCourse from "./components/viewAllCourse";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero title='React Course Hub' description='Explore the World of React Development' />
    <CardContainer />
    <CourseListContainer />
    <ViewAllCourse />
    </>
  )
}

export default App;