import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import {getSingleUser} from '../../redux/actions/userAction'
import { useSearchParams } from "react-router-dom"

export const ProfileLogic = () => {
    const { user } = useSelector((state) => state.getSingleUser)
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
       dispatch(getSingleUser(id))
    }, [])
    console.log(user);
    return{
        user
    }
}