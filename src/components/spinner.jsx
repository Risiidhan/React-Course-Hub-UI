import { ClipLoader } from "react-spinners";

const overRide = {
    display: 'block',
    margin: '100px auto'
}
const Spinner = ({loading}) => {
    return (
        <>
            <ClipLoader
                color="#dc2626"
                loading={loading}
                cssOverride={overRide}
                size={150}
            />
        </>
    )
}

export default Spinner;