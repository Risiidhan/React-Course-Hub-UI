const RoleCard = (role) => {
    return (
        <>
            <div className={`${role.bg}-100 p-6 rounded-lg shadow-md`}>
                <h2 className="text-2xl font-bold">{role.title}</h2>
                <p className="mt-2 mb-4">
                    {role.description}
                </p>
                <a
                    href="/add-course"
                    className={`inline-block ${role.bg}-500 text-white rounded-lg px-4 py-2 hover:${role.bg}-600`}
                >
                    {role.action}
                </a>
            </div>
        </>
    )
}

export default RoleCard;