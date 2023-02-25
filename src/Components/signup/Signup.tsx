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
import { FormEvent, useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@mui/material';

function Signup() {
        const [email, setEmail] = useState<string>('');
        const [password, setPassword] = useState<string>('');
        const [contact, setContact] = useState<string>('');
        const [fullName, setFullName] = useState<string>('');

    
        const signUp = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            });
        }

    return(
        <div className="signup">
            <Header />
            <form action="" onSubmit={signUp}>
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
                        onChange={(event) => {
                            setFullName(event.target.value)
                        }}
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
                        onChange={(event) => {
                            setContact(event.target.value)
                        }}
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
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
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
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                </FormControl>
            
                {/* <DefButton text="Sign up"/> */}
                <Button variant="contained" color="success" type="submit"></Button>
            </form>
            <p> <Link to="/login">Already have an account? Login</Link></p>
        </div>
    )
}

export default Signup;