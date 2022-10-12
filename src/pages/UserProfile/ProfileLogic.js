import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getSingleUser } from '../../redux/actions/userAction'
import { useSearchParams } from "react-router-dom"

export const ProfileLogic = () => {
    const { userInfo } = useSelector((state) => state.signInUser)
    const { user } = useSelector((state) => state.getSingleUser)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleUser(userInfo._id))
    }, [])

    const fullName = user?.name.split(" ");
    const firstName = fullName && fullName[0];
    const lastName = fullName && fullName[1];
    return {
        user,
        firstName,
        lastName
    }
}