import css from './feedback.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <div className={css.buttons}>
            {Object.keys(options).map((key) => (
                <button key={key} className={css.button} onClick={() => onLeaveFeedback(key)}>{key}</button>
            ))}
        </div>
    );
}