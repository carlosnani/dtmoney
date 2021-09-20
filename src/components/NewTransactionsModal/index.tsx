import Modal from 'react-modal';
import { Container, TransactionsTypeContainer, RadioBox } from './style';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionsModalProps {   
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal( {isOpen, onRequestClose}: NewTransactionsModalProps) {

  const [type, setType] = useState('');
   
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}       
     overlayClassName="modal-overlay"     
     className="react-modal-content"  
    >
      <button type="button">
        <img src={closeImg} alt="close modal" onClick={onRequestClose} className="react-modal-close"/>
      </button>
      <Container>
        <h2>Nova transação</h2>
        <input 
          placeholder="Título"
        
        >
        </input>
        <input 
          placeholder="Valor"
        >
        </input>

        <TransactionsTypeContainer>  

          <RadioBox type="button"             
            onClick = {() => setType('deposit')}
            isActive = {type === 'deposit'} 
            activeColor = "green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor = "red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>

        </TransactionsTypeContainer>  

        <input 
          placeholder="Categoria"
          
        >
        </input>
        <button className="submit" type="submit">
          Cadastrar
        </button>
      </Container>
              
  </Modal>
  )
}