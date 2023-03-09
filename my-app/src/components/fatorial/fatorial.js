import { useState } from "react";
import './fatorial.scss'

const Fatorial = (props)=> {
    const [numero, setNumero] = useState (0)
    const [fatorial, setFatorial] = useState (0)
    const [status, setStatus] = useState ("Par")

    return(
        <div className="fatorial">
        <div className="maintext">
        Fatorial: <span className="highlight"> {fatorial} </span>
        </div>
        <input type="number" value={numero} onChange={(e)=>{
            var num = Number(e.target.value)
            setNumero (num)
            var resultado = num
            for (var i = 1; i < num; i++) {
                resultado *= i
            }
            console.log (resultado)
            setFatorial (resultado)

            if (num%2 === 0) {
            setStatus ("Par")
            } else {
            setStatus ("Impar")
            }
        }}/>
        <div className="maintext">
        Status: <span className="highlight"> {status} </span>
        </div>
        </div>
    )
}
export default Fatorial
