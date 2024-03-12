import styles from "./Chatbot.module.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Chatbot = ({value, onChange, onClick}) => {
    return (
        <div className={styles.wrapper}>
          <TextField id="outlined-basic" label="Type your query here" variant="outlined" value={value} onChange={onChange} style={{marginLeft: '15px'}}/>
          <Button variant="contained" endIcon={<SendIcon />} onClick={onClick} style={{backgroundColor:'#2a7646ff', height:'55px', width:'90px', marginRight:'15px'}}>
            Send
          </Button>
        </div>
    );
};


export default Chatbot;