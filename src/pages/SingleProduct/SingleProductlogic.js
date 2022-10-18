import {useParams} from 'react-router-dom';
import { HomeLogic } from '../Home/HomeLogic';

export const SingleProductLogic = () => {
    const { id } = useParams();
    const { products } = HomeLogic();
    const product = products.find((product) => product.id === parseInt(id));

    return {
        product
    }
}