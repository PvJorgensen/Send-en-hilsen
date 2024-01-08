import style from './list.module.scss'

export const List = props => {
    console.log(props.data);
    return (
        <ul className={style.mealList}>
            {props.data.map((item, key) => {
                return (
                    <li key={key}>{item}</li>
                )
            })}
        </ul>
    )
}