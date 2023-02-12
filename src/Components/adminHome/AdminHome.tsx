import './AdminHome.css';
import image from './../../admin.png';
import Product from './../product/Product';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Footer from '../footer/Footer';

function AdminHome(){
    return(
        <div className="adminHome">
            {/* Admin info */}
            <div className="adminInfo">
                <img src={image} alt="admin-pic" />
                <div className="adminName">
                    <p>Admin Name</p>
                    <p>Admin</p>
                </div>
                <div className='order'>
                    <ListAltIcon/>
                </div>
            </div>
            {/* Products */}
            <div className="products">
                <Product name="Apple" price={20} unit="kg"/>
                
            </div>
            <Footer/>
            
        </div>
    )
}

export default AdminHome;