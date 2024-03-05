import styles from "./Chatbot.module.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Chatbot = ({value, onChange, onClick}) => {
    return (
        <div className={styles.wrapper}>
          <TextField id="standard-basic" label="Type your query here" variant="standard" value={value} onChange={onChange}/>
          <Button variant="contained" endIcon={<SendIcon />} onClick={onClick}>
            Send
          </Button>
        </div>
    );
};


export default Chatbot;