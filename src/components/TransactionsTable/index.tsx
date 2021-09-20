import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
    
  useEffect(()=>{
    api.get('transactions')
    .then(res => console.log(res.data))
  },[]);
    
  return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 10.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/10/2020</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ -2.000,00</td>
                        <td>Despesa</td>
                        <td>20/10/2020</td>
                    </tr>
 
                </tbody>
            </table>
        </Container>    
  );
}