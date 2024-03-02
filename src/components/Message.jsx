import bot from "../favicon.svg";
import user from "../favicon.svg";

import styles from "./message.module.css";

export default function Message({ role, content }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          src={role === "assistant" ? bot : user}
          className={styles.avatar}
          alt="profile avatar"
        />
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}