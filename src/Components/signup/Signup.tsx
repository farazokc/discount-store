import Header from './../header/Header';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Input from '@mui/material/Input';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DefButton from './../defButton/DefButton';
import './Signup.css';
import { Link } from "react-router-dom";

function Signup() {
    return(
        <div className="signup">
            <Header />
            <FormControl variant="standard">
                <InputLabel htmlFor="fname">
                    Full Name
                </InputLabel>
                <Input
                    id="fname"
                    endAdornment={
                        <InputAdornment position="end">
                            <AccountCircleOutlinedIcon />
                        </InputAdornment>
                }
                /> 
            </FormControl>
                <br/>
            <FormControl variant="standard">
                <InputLabel htmlFor="contact">
                    Contact
                </InputLabel>
                <Input
                    id="contact"
                    type="number"
                    endAdornment={
                        <InputAdornment position="end">
                            <PhoneInTalkOutlinedIcon />
                        </InputAdornment>
                }
                />
            </FormControl>
                <br/>

            <FormControl variant="standard">
                <InputLabel htmlFor="email">
                    Email
                </InputLabel>
                <Input
                    type='email'
                    id="email"
                    endAdornment={
                        <InputAdornment position="end">
                            <EmailOutlinedIcon />
                        </InputAdornment>
                }
                />
            </FormControl>
                 <br/>
            <FormControl variant="standard">
                <InputLabel htmlFor="password">
                    Password
                </InputLabel>
                <Input
                    id="password"
                    type='password'
                    endAdornment={
                        <InputAdornment position="end">
                            <VisibilityOffOutlinedIcon />
                        </InputAdornment>
                }
                />
            </FormControl>
        
            <DefButton text="Sign up"/>
            <p> <Link to="/login">Already have an account? Login</Link></p>
        </div>
    )
}

export default Signup;