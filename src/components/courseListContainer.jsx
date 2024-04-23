import courses from '../courses.json';
import CourseList from './courseList';

const CourseListContainer = () => {
    const recentcourses = courses.slice(0,3)
    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
                        Browse Course
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recentcourses.map((course) => (
                            <CourseList key={course.id} course={course} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseListContainer;