import Header from './../header/Header';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { FormEvent, useState } from 'react';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const signIn = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {                             //set usercredentials in the context
            
            navigate("/userHome");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="login">
            <div className="container">
                <Header />
                <form action="" onSubmit={signIn}>
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
                                setPassword(event.target.value);
                            }}/>
                    </FormControl>
                    <br />
                    {/* <Link to="/userHome"> */}
                        <Button variant="contained" color="success" type="submit">Login</Button>
                    {/* </Link> */}
                </form>
                <p><a href='/signup'>Don't have an account? Register</a></p>
            </div>
        </div>
    )
}

export default Login;