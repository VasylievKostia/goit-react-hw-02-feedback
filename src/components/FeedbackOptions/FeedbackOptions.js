import s from './FeedbackOptions.module.css'


export function FeedbackOptions({ onHandleGood, onHandleNeutral, onHandleBad }) {
    return (<ul>
        <button type="button" className={s.button} onClick={onHandleGood}>good</button>
        <button type="button" className={s.button} onClick={onHandleNeutral}>neutral</button>
        <button type="button" className={s.button} onClick={onHandleBad}>bad</button> 
    </ul>)
}
