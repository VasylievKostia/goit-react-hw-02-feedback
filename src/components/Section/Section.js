import s from "./Sectoin.module.css"


export function Section({ title, children }) {
    return (
        <section className={s.sectoin}>
            <h2>{title}</h2>
            {children}
        </section>     
    )
}