import s from './Statistics.module.css'
import { Notification} from '../Notification/Notification.js'


export function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
    <div>
        <h3>Statistics</h3>
            {total ?
            <div>
                <ul className={s.list}>
                    <li>good: {good }</li>
                    <li>neutral: {neutral} </li>
                    <li>bad: {bad}</li>
                </ul>
                <p>total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </div>
                : <Notification message="No feedback given"></Notification>}
    
    </div>
            )
}