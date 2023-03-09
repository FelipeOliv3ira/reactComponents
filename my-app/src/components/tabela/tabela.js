import { useState } from "react";
import produtos from '../../dados/produtos'
import './tabela.scss'


const Tabela = (props)=> {

    const Linha = (props) => {
        const [qtde, setQtde] = useState (0)
        return (
            <tr>
                <td>{props.id}</td>
                <td>{props.nome}</td>
                <td><input type="number" value={qtde} onChange={(e)=>{setQtde (Number(e.target.value))}}/></td>
                <td>{props.Preço} R$</td>
                <td>{props.Preço * qtde} R$</td>
            </tr>
        )
    }
    return(
        <div>
            <thead className="thead">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Qtde</th>
                    <th>Preço</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
            {produtos.map( (produto) =>{
                return <Linha id = {produto.id} nome = {produto.nome} Qtde = {produto.Qtde} Preço = {produto.preco}></Linha>
            })}
            </tbody>
        </div>
    )
}
export default Tabela