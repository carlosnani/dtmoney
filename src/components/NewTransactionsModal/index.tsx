import Modal from 'react-modal';
import { Container, TransactionsTypeContainer, RadioBox } from './style';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent , useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionsModalProps {   
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal( {isOpen, onRequestClose}: NewTransactionsModalProps) {

  //Form
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue ] = useState(0);

  const [type, setType] = useState('');

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    const data = {
      title,
      value, 
      category, 
      type
    };
    api.post('/transactions', data);
  }
   
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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>
        <input 
          placeholder="Título"
          value={title}     
          onChange={event => setTitle(event.target.value)}   
        >
        </input>
        <input 
          type="number"
          placeholder="Valor"
          value={value} 
          onChange={event => setValue(Number(event.target.value))}
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
          type="string"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
        </input>
        <button className="submit" type="submit">
          Cadastrar
        </button>
      </Container>
              
  </Modal>
  )
}