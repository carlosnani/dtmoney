import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import Modal from 'react-modal';

Modal.setAppElement('#root');
 
export function App() {
  const [isNewTransition, setIsNewTransition] = useState(false);

  function handleOpenTransitionModal() {
    setIsNewTransition(true);
  }

  function handleCloseTransitionModal() {
    setIsNewTransition(false);
  }
  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenTransitionModal}/> 
      <Dashboard/>
      <NewTransactionsModal
        isOpen={isNewTransition}
        onRequestClose={handleCloseTransitionModal}      
      />
      <GlobalStyle />
    </>
  );
}
