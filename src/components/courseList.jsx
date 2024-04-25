import { useState } from "react";
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const CourseList = ({ course }) => {

    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = course.description;

    if (!showFullDescription)
        description = description.substring(0, 90) + '...';
    return (
        <>
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">{course.title}</h3>
                        <div className="text-gray-600 my-2">{course.type}</div>
                    </div>

                    <div className="mb-5">{description}</div>

                    <button
                        onClick={() => setShowFullDescription((prevState) => !prevState)}
                        className="text-cyan-900 mb-2 hover:text-cyan-900">
                        {!showFullDescription ? 'More' : 'Less'}
                    </button>

                    <h3 className="text-cyan-900 mb-2 font-bold"> {course.price}</h3>

                    <div className="border border-gray-100 mb-5"></div>
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-cyan-900 mb-3">
                            <FaMapMarker className="inline text-lg mb-1 mr-1" />
                            {course.location}
                        </div>

                        <Link
                            to={`/course/${course.id}`}
                            className={`inline-block bg-cyan-700 text-white rounded-lg px-4 py-2 hover:bg-cyan-900`}
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseList;