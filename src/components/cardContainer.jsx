import RoleCard from "./roleCard";
const roles = [
    {
        id: 1,
        title: 'For Teachers',
        description: 'Add your lessons here to help Students',
        action: 'Add course',
        bg: 'bg-red'
    },
    {
        id: 2,
        title: 'For Students',
        description: 'Browse our specialized lessons and start today',
        action: 'Search course',
        bg: 'bg-gray'
    }
]

const CardContainer = () => {
    return (
        <>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        {roles.map((role) => (
                            <RoleCard key={role.id} {...role} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardContainer;