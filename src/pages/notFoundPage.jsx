import {Link} from 'react-router-dom'
import {FaExclamationTriangle} from 'react-icons/fa'

const NotFoundPage = () => {
    return (
        <>
            <section class="text-center flex flex-col justify-center items-center h-96">
                <FaExclamationTriangle className='text-red-400 text-6xl mb-4'/>
                <i class="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
                <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
                <p class="text-xl mb-5">This page does not exist</p>
                <Link
                    href="/index.html"
                    class="text-white bg-red-700 hover:bg-red-900 rounded-md px-3 py-2 mt-4"
                >Go Back</Link
                >
            </section>
        </>
    )
}

export default NotFoundPage;