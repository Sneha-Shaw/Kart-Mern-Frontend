import { getAllOrder, cancelOrder, searchProductsInOrder } from '../../redux/actions/orderAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GetOrderLogic = () => {
    const { userInfo } = useSelector(state => state.signInUser)
    const { orders } = useSelector(state => state.getAllOrder)
    const { products } = useSelector(state => state.searchProductsInOrder)
    const { data: cancelled, error } = useSelector(state => state.cancelOrder)

    const [search, setSearch] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

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
    //search products in order
    const searchProductsInOrderHandler = (e) => {
        setSearch(e.target.value)
        dispatch(searchProductsInOrder(userInfo?._id,e.target.value))
    }

    return {
        orders,
        cancelOrderHandler,
        redirectHandler,
        searchProductsInOrderHandler,
        search,
        products,
        userInfo
    }
}
