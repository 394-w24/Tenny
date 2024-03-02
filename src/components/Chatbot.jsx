import styles from "./Chatbot.module.css"

const Chatbot = ({value, onChange, onClick}) => {
    return (
        <div className={styles.wrapper}>
          <input
            className={styles.text}
            placeholder="Your prompt here..."
            value={value}
            onChange={onChange}
          />
          <button className={styles.btn} onClick={onClick}>
            Go
          </button>
        </div>
    );
};


export default Chatbot;