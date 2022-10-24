import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export const SingleProductLogic = () => {
    const { product } = useSelector(state => state.getSingleProduct)
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dispatch])
    const [show, setShow] = useState()
    useEffect(() => {
        setShow( product?.featureimg[0])
    }, [ product?.featureimg])

    return {
        product,
        show,
        setShow
    }
}