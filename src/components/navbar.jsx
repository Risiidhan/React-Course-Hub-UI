import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-red-700 border-b border-red-500">
                <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            {/* <!-- Logo --> */}
                            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                                <img
                                    className="h-10 w-auto"
                                    src={logo}
                                    alt="React Courses"
                                />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                >React Course</span
                                >
                            </NavLink>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => isActive ? 'bg-gray text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'}
                                    >Home</NavLink
                                    >
                                    <NavLink
                                        to="/course"
                                        className={({ isActive }) => isActive ? 'bg-gray text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'}
                                    >Courses</NavLink
                                    >
                                    <NavLink
                                        to="/add-course"
                                        className={({ isActive }) => isActive ? 'bg-gray text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'}
                                    >Add Course</NavLink
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;