// single item of shopping cart of user
import image from '../../fruits.jpg';
function CartProduct() {
    return(
        <div className="CartProduct">
            <div className="img-container">
                <img src={image}/>
            </div>
            <div className="item-details">
                <p>Item Name</p>
            </div>
            <div className="item-count">
                <button>-</button>
                <input type="number" />
            </div>
            {/* image */}
            {/* item name */}
            {/* quantity increase decrease */}
            {/* price */}
        </div>
    )
}

export default CartProduct;