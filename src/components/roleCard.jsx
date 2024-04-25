import { Link } from 'react-router-dom'

const RoleCard = (role) => {
    return (
        <>
            <div className={`card-image p-6 text-white rounded-lg shadow-md`}>
                <h2 className="text-2xl font-bold">{role.title}</h2>
                <p className="mt-2 mb-4">
                    {role.description}
                </p>
                <Link
                    to={role.to}
                    className={`inline-block ${role.bg}-500 text-white rounded-lg px-4 py-2 hover:${role.bg}-600`}
                >
                    {role.action}
                </Link>
            </div>
        </>
    )
}

export default RoleCard;