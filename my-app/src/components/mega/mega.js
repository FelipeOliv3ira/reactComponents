import { useState } from 'react'
import './mega.scss'
const Mega =(props)=>{
    const [numberQnt, setnumberQnt] = useState (5)
    const [randomNumber, setrandomNumber] = useState ("10")
    const generateRandomNumber = () => {
     setrandomNumber (GenerateNumberList())
    }

  function GenerateNumberList () {
    var numberList = ""
    for (let i = 0; i < numberQnt; i++) {
      numberList += (Math.floor(Math.random() * (10 - 99)) + 99).toString() + " "
    }
    return numberList
  }

    return (
      <div className='mega'>
      <div className='maintext'>MEGA</div>
      <div className='maintext'><span> {randomNumber} </span></div>
      <div className='numbertext'>Qtde de Números <input type="number" value={numberQnt} onChange={(e)=>{setnumberQnt (e.target.value)}} /></div>
      <p></p>
      <button onClick={generateRandomNumber}>Gerar Números</button>
      </div>
    )

}
export default Mega
  