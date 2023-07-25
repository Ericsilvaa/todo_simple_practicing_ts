import React, { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void
};

const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = useState("");


  const handleKeyup = (e: KeyboardEvent) => {
    console.log(e.code)
    if(e.code === 'Enter' && inputText) {
      // executar uma function que vem do pai
      onEnter(inputText)
      setInputText('')
    }
  }


  return (
    <C.Container>
      <div className="image">+</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={({ target }) => setInputText(target.value)}
        onKeyUp={handleKeyup}
      />
    </C.Container>
  );
};

export default AddArea;
