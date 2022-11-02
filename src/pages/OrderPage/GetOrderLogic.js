import { getAllOrder } from '../../redux/actions/orderAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GetOrderLogic = () => {
    const { userInfo } = useSelector(state => state.signInUser)
    const { orders } = useSelector(state => state.getAllOrder)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (userInfo) {
            dispatch(getAllOrder(userInfo?._id))
        }
        else {
            navigate('/login')
        }
    }, [dispatch])

    return {
        orders
    }
}
