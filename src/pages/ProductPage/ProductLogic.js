import { useEffect } from "react"
// import { getAllProducts } from "../../redux/actions/productAction"
import { useSelector,useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

export const ProductLogic = () => {
    // const { products } = useSelector(state => state.getAllProducts)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    // useEffect(() => {
        // dispatch(getAllProducts())
    // }, [dispatch])
    return{
        // products
    }
}