import './Footer.css';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';

function Footer(){
    return(
        <div className="footer">
            <div className="Home">
                <HomeIcon/><br />
                Home
            </div>
            <div className="Add Items">
                <AddCircleOutlineIcon/><br />
                Add Items
            </div>
            <div className="Account">
                <PersonIcon/><br />
                Account
            </div>
        </div>
    );
}

export default Footer;