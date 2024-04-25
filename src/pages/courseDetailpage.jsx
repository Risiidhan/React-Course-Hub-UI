import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaMapMarked } from "react-icons/fa"
import { toast } from "react-toastify";
import NotFoundPage from "./notFoundPage";

const CourseDetailPage = ({ deleteCourse }) => {
    const nav = useNavigate();
    const { id } = useParams();
    const course = useLoaderData();

    const remCourse = (id) => {
        window.confirm('Do you want to delete this course?');

        if (!confirm) return;
        deleteCourse(id);
        nav('/course');
    }

    if (!course) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/course"
                        className="text-cyan-700 hover:text-cyan-600 flex items-center"
                    >
                        <FaArrowCircleLeft className="mr-2" />
                        Back to Course Listings
                    </Link>
                </div>
            </section>
            <section className="bg-cyan-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-3 gap-4">
                        <main className="col-span-2">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{course.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {course.title}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <FaMapMarked className="mr-2 text-lg text-teal-700" />
                                    <p className="text-teal-700">{course.location}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-cyan-800 text-lg font-bold mb-6">
                                    Course Description
                                </h3>

                                <p className="mb-4">
                                    {course.description}
                                </p>

                                <h3 className="text-cyan-800 text-lg font-bold mb-2">Price</h3>

                                <p className="mb-4">{course.price}</p>
                            </div>
                        </main>

                        <aside className="col-span-1">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Instructor Info</h3>

                                <h2 className="text-2xl">{course.instructor.name}</h2>

                                <p className="my-2">
                                    {course.instructor.bio}
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-cyan-100 p-2 font-bold">
                                    {course.instructor.contactEmail}
                                </p>

                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Course</h3>
                                <Link
                                    to={`/edit-course/${course.id}`}
                                    className="bg-zinc-500 hover:bg-zinc-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Course</Link
                                >
                                <button
                                    className="bg-cyan-900 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    onClick={() => remCourse(course.id)}
                                >
                                    Delete Course
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

const courseLoader = async ({ params }) => {
    const res = await fetch(`/api/${params.id}`)
    if(res.status === 404){
        return null;
    }
    const data = await res.json();
    return data;
}

export { CourseDetailPage as default, courseLoader };