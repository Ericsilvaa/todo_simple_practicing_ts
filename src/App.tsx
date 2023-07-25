import { useState } from "react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

function App() {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    // newList recebe uma copia de list
    let newList = [...list];
    // newList adiciona ao final do array um objeto
    newList.push({ id: list.length + 1, name: taskName, done: false });
    // State setList recebe newList
    setList(newList);
  };

  const handleTaskChange = (task: Item) => {
    // newList recebe uma copia de list
    let newList = [...list];
    /* 
      *map -> retorna novoArray do mesmo tamanho do original
      const newList = list.map(item => item.id === task.id ? task : item)
      setList(newList)
    */

    /* 
      1. Para cada item da iteração
      2. Se a condição for 'true', adiciona task.
      3. Se a condição for 'false', mantém o item da iteração.
    */
    newList.map((item) => (item.id === task.id ? task : item));

    // State setList recebe newList
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* {AREA DE ADICIONAR NOVA TAREFA} */}
        <AddArea onEnter={handleAddTask}></AddArea>

        {/* LISTA DE TAREFAS */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
