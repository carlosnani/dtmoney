import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from "react";

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
      <Modal 
        isOpen={isNewTransition}
        onRequestClose={handleCloseTransitionModal}              
        >
            <h2>Nova transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
