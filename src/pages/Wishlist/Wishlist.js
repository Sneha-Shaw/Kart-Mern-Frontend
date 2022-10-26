import React,{useEffect} from 'react'
import useStyles from "./styles";
import CardComponent from '../../components/Card/CardComponent'

import { useNavigate } from 'react-router-dom';
import {
  getWishlist,
} from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';

const Wishlist = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { wishlistProduct } = useSelector(state => state.getWishlist)
  const { userInfo } = useSelector(state => state.signInUser)
  const { data: deleteProduct, error } = useSelector(state => state.deleteFromWishlist)
  useEffect(() => {
    if (!error) {

      setTimeout(() => {
        dispatch(getWishlist(userInfo?._id))
      }, 1000)
    }
  }, [deleteProduct, dispatch, error])
  useEffect(() => {
    if (userInfo) {
      dispatch(getWishlist(userInfo?._id))
    } else {
      navigate('/login')
    }
  }, [dispatch, userInfo, navigate])

  return (
    <div className={classes.container}>
      <div className={classes.products}>
        {wishlistProduct &&
          wishlistProduct.body.map(
            (product, index) => {
              return (
                <CardComponent product={product.productId} key={index} />

              );
            })}
      </div>
    </div>
  )
}

export default Wishlist