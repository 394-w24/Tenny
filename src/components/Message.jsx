import bot from "/bot.png";
import user from "/user.png";
import Grid from '@mui/material/Grid';

import styles from "./message.module.css";

export default function Message({ role, content }) {
  return (

    <Grid container spacing={2} justifyContent="center" sx={{ padding: '0 16px' }}> {/* Adjust spacing as needed */}
      <Grid item xs={3} sm={6} md={4} lg={4} className={role === "assistant" ? styles.assistant_left : styles.user_left}>
        <img
          src={role === "assistant" ? bot : user}
          alt="profile avatar"
          width="40px"
          height="40px"
        />
        <br/>
        <b className={styles.icon}>{ role === "assistant" ? "Tenny" : "User" }</b>
      </Grid>
      <Grid item xs={9} sm={6} md={4} lg={4} className={role === "assistant" ? styles.assistant_right : styles.user_right}>
            <pre>{content}</pre>
      </Grid>
    </Grid>

  );
}