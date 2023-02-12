import DeleteIcon from '@mui/icons-material/Delete';
import CartProduct from '../cartProduct/CartProduct';
import './Order.css';

function Order(){
    return(
        <div>
            <div className="userHeader">
               <div className="header__text">
                    <p className='green'>SHOPPING</p>
                    <p className='blue'>CART</p>
               </div>
               <div className="bin_icon">
                    <DeleteIcon/>
               </div>
            </div>
            <div className="cart_items">
                <CartProduct/>
            </div>
        </div>
    );
}

export default Order;