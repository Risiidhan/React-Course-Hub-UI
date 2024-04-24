import { useEffect, useState } from 'react';
import CourseList from './courseList';
import Spinner from './spinner';

const CourseListContainer = ({ isHome = false }) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchcourse = async () => {
            const url = isHome ? '/api?_limit=3': '/api';
            try {
                const list = await fetch(url);
                const data = await list.json();
                setCourses(data);
            } catch (error) {
                console.log('error : ', error);
            } finally {
                setLoading(false);
            }
        }
        fetchcourse();
    }, [])


    return (
        <>
            <section className="bg-red-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
                        Browse Course
                    </h2>

                    {loading ?
                        (<Spinner loading={loading} />)
                        :
                        (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {courses.map((course) => (
                                <CourseList key={course.id} course={course} />
                            ))}
                        </div>)
                    }
                </div>
            </section>
        </>
    )
}

export default CourseListContainer;