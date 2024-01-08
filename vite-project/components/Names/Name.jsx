import style from './name.module.scss'

export const Name = props =>{
    return(<p className={style.pTag}>Velkommen til butikken {props.Name}</p>)
}