import Modal from "react-modal";
import { Container, TransactionsTypeContainer, RadioBox } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../Hooks/useTransactions";

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionsModal({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) {
  //Contexto
  const { createTransaction } = useTransactions()
  //Form
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    await event.preventDefault();
    
    createTransaction({
      title,
      amount,
      category,
      type,
    });
    setTitle("");
    setCategory("");
    setAmount(0);
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img
          src={closeImg}
          alt="close modal"
          onClick={onRequestClose}
          className="react-modal-close"
        />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        ></input>

        <TransactionsTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>

        <input
          type="string"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        ></input>
        <button className="submit" type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
