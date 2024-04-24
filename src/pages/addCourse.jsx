import { useState } from "react";

const AddCoursePage = () => {
    const [type, setType] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [contactEmail, setContactEmail] = useState('')

    return (
        <>
            <section className="bg-red-50">
                <div className="container m-auto max-w-2xl py-24">
                    <div
                        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                    >
                        <form>
                            <h2 className="text-3xl text-center font-semibold mb-6">Add Course</h2>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                >Course Type</label
                                >
                                <select
                                    id="type"
                                    name="type"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="Full-Time">Online Course</option>
                                    <option value="Part-Time">In-Person Workshop</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2"
                                >Course Listing Name</label
                                >
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    placeholder="eg. React Fundamental 2024"
                                    required
                                    value={title}
                                    onInput={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-gray-700 font-bold mb-2"
                                >Description</label
                                >
                                <textarea
                                    id="description"
                                    name="description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="Add any course desciption"
                                    value={description}
                                    onInput={(e) => setDescription(e.description.value)}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                >Price</label
                                >
                                <select
                                    id="price"
                                    name="price"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                    <option value="Under $5">Under $5</option>
                                    <option value="$5 - 6">$5 - $10</option>
                                    <option value="$9 - 10">$10 - $50</option>
                                    <option value="$10 - 125K">$50 - $100</option>
                                    <option value="$125K - 15">$100 - $150</option>
                                    <option value="$15 - 175K">$150 - $175</option>
                                    <option value="$175K - 20">$175K - $200</option>
                                    <option value="Over $20">Over $200</option>
                                </select>
                            </div>

                            <div className='mb-4'>
                                <label className='block text-gray-700 font-bold mb-2'>
                                    Location
                                </label>
                                <input
                                    type='text'
                                    id='location'
                                    name='location'
                                    className='border rounded w-full py-2 px-3 mb-2'
                                    placeholder='Instructor Location'
                                    required
                                    value={location}
                                    onInput={(e) => setLocation(e.target.value)}
                                />
                            </div>

                            <h3 className="text-2xl mb-5">Instructor Info</h3>

                            <div className="mb-4">
                                <label htmlFor="instructor" className="block text-gray-700 font-bold mb-2"
                                >Instructor Name
                                </label>
                                <input
                                    type="text"
                                    id="instructor"
                                    name="instructor"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Instructor Name"
                                    value={name}
                                    onInput={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="instructor_description"
                                    className="block text-gray-700 font-bold mb-2"
                                >Instructor Description</label
                                >
                                <textarea
                                    id="instructor_description"
                                    name="instructor_description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="What does your instructor do?"
                                    value={bio}
                                    onInput={(e) => setBio(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="contact_email"
                                    className="block text-gray-700 font-bold mb-2"
                                >Contact Email</label
                                >
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Email address for applicants"
                                    required
                                    value={contactEmail}
                                    onInput={(e) => setContactEmail(e.tcontactEmail.value)}
                                />
                            </div>

                            <div>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Add Course
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddCoursePage;