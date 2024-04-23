const CourseList = ({ course }) => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">{course.title}</h3>
                        <div className="text-gray-600 my-2">{course.type}</div>
                    </div>

                    <div className="mb-5">
                        {course.description}
                    </div>

                    <h3 className="text-red-500 mb-2"> {course.price}</h3>

                    <div className="border border-gray-100 mb-5"></div>
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                            <i className="fa-solid fa-location-dot text-lg"></i>
                            {course.location}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseList;