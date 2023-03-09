import { useState } from 'react'
import './contador.scss'
const Contador =(props)=>{
    const [numbContador, setNumbContador] = useState (0)
    const [passo, setPasso] = useState (5)

    function addContador (add) {
        setNumbContador (numbContador + (passo * parseInt(add)))
    }

    const ButtonContador = (props) =>{
    return (
        <button onClick={() => {addContador (props.add)}} className='button'>{props.text}</button>
    )
    }

    return (
        <div className='contador'>
        <div className='maintext'>Contador</div>
        <div className='maintext'>{numbContador}</div>
        <div className='passo'>Passo: <input type="number" value={passo} onChange={(e)=>{setPasso (Number(e.target.value))}} /></div>
        <ButtonContador text="+" add={1}/>
        <ButtonContador text="-" add={-1}/>
        </div>
    )
}

export default Contador