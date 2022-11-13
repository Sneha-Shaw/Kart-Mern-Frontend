import { getAllOrder,cancelOrder } from '../../redux/actions/orderAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GetOrderLogic = () => {
    const { userInfo } = useSelector(state => state.signInUser)
    const { orders } = useSelector(state => state.getAllOrder)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data: cancelled, error } = useSelector(state => state.cancelOrder)
    const redirectHandler = (id) => {
        navigate(`/product/${id}`)
    }
    useEffect(() => {
        if (userInfo) {
            dispatch(getAllOrder(userInfo?._id))
        }
        else {
            navigate('/login')
        }
    }, [dispatch])

    useEffect(() => {
        if (!error) {
    
          setTimeout(() => {
            dispatch(getAllOrder(userInfo?._id))
          }, 1000)
        }
      }, [cancelled, dispatch, error])
//cancel order
    const cancelOrderHandler = (id) => {
        dispatch(cancelOrder(id))
    }
    return {
        orders,
        cancelOrderHandler,
        redirectHandler
    }
}
