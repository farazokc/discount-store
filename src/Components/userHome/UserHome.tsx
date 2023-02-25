import image from './../../admin.png';
import Product from './../product/Product';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from '../footer/Footer';

import cart from '../../cart.png';
import groceries from '../../groceries.jpg';
import fruits from '../../fruits.jpg';
import vegetables from '../../vegetables.jpg';
import masala from '../../masala.jpg';

import Input from '@mui/material/Input';
import './UserHome.css';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { auth } from '../../firebase';
import Logout from '../logout/Logout';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';

async function UserHome(){
    const loggedIn = useContext(AuthContext);
    
    const productRef  = collection(db, "/products");
    const q = query(productRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    })

    return(
        <div className="UserHome">
            <div className="userHeader">
               <div className="header__text">
                    <p className='green'>SAYLANI WELFARE</p>
                    <p className='blue'>ONLINE DISCOUNT STORE</p>
               </div>
               <div className="shopping_icon">
                    <ShoppingCartIcon/>
               </div>
            </div>
            <div className='cart_image'>
                <img src={cart} alt="" />
            </div>
            <div className="search">
                <FormControl variant="standard">
                    <Input
                        id="Search"
                        placeholder='  Search'
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                    }
                    /> 
                </FormControl>
            </div>
            <div className='categories'>
                <div className="Grocery">
                    <div className="img-container">
                        <img src={groceries}/>
                    </div>
                    Grocery
                </div>
                <div className="Vegetable">
                    <div className="img-container">
                        <img src={vegetables}/>
                    </div>
                    Vegetables
                </div>
                <div className="Fruit">
                    <div className="img-container">
                        <img src={fruits}/>
                    </div>
                    Fruits
                </div>
                <div className="Masala">
                    <div className="img-container">
                        <img src={vegetables}/>
                    </div>
                    Masala
                </div>
            </div>
            <Logout />
            <Footer/>
        </div>
    )
}

export default UserHome;