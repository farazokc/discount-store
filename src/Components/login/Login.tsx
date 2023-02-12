import Header from './../header/Header';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DefButton from './../defButton/DefButton';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="container">
                <Header />
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
                <DefButton text='Sign in'/>
                <p><a href='/signup'>Don't have an account? Register</a></p>
            </div>
        </div>
    )
}

export default Login;