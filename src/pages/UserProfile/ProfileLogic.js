import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getSingleUser, updateUser } from '../../redux/actions/userAction'
// import { useSearchParams } from "react-router-dom"
import Swal from "sweetalert2"
export const ProfileLogic = () => {
    const { userInfo } = useSelector((state) => state.signInUser)
    const { user } = useSelector((state) => state.getSingleUser)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleUser(userInfo._id))
    }, [])
    //state variables to update name,email,address,city,zipcode
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const id = userInfo?._id
    const updateUserHandler = () => {
        dispatch(updateUser(
            name,
            email,
            mobile,
            address,
            pincode,
            city,
            state,
            id
        ))
        setTimeout(() => {
            Swal.fire({
                title: 'Profile Updated Successfully',
                icon: 'success'
            })
        }, 3000);
    }
    return {
        user,
        name,
        setName,
        email,
        mobile,
        address,
        pincode,
        city,
        state,
        setEmail,
        setMobile,
        setAddress,
        setPincode,
        setCity,
        setState,
        updateUserHandler
    }
}