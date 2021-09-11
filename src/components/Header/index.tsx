import { useState } from 'react';
import logoImg from '../../assets/logo.svg'; 
import { Container, Content} from './styles';
 

export function Header() {
  const [showModal, setModal] = useState(false);
  

  return (
    <Container>
        <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button">
                Nova transação    
            </button> 
        </Content>
    </Container>
  );
}