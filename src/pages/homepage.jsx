
import CardContainer from "../components/cardContainer";
import CourseListContainer from "../components/courseListContainer";
import Hero from "../components/hero";
import ViewAllCourse from "../components/viewAllCourse";

const HomePage = () => {
    return (
        <>
            <Hero title='React Course Hub' description='Explore the World of React Development' />
            <CardContainer />
            <CourseListContainer isHome={true} />
            <ViewAllCourse />
        </>
    )
}

export default HomePage;