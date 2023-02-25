import './Product.css';
import image from './../../admin.png';
import FC from 'react';
import { collection, query } from 'firebase/firestore';
import { db } from '../../firebase';

interface ProductProps{
    name: string;
    price: number;
    unit: string;
}

function Product ({name, price, unit}: ProductProps){
    return(
        <div className="product">
            <img src={image} alt="" />
            <div className="item_info">
                <p>{name}</p>
                <p>{unit}</p>
            </div>
            <div className="price">
                PKR {price}
            </div>
            
        </div>
    )
}

export default Product;