import { useEffect } from "react"
import { searchProduct } from "../../redux/actions/productAction"
import { useSelector,useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

export const SearchResultPageLogic = () => {
    const {data: searchResult} = useSelector((state)=> state.searchProduct)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    useEffect(() => {
        dispatch(searchProduct(searchParams.get('q')))
    }, [dispatch])
    // console.log(products && products);
    return{
        searchResult
    }
}