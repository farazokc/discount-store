import Button from '@mui/material/Button';
import './DefButton.css';

function DefButton({text}: {text: string}){
    return (
        <div className="DefButton">
            <Button variant="contained" color="success">
                {text}
            </Button>
        </div>
    )
}

export default DefButton;