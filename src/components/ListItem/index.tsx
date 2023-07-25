import React, { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
  onChange: (task: Item) => void;
};

const ListItem = ({ item, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const updateList = (target: HTMLInputElement) => {
    setIsChecked(target.checked);

    const updateTask = {
      id: item.id,
      name: item.name,
      done: isChecked,
    };

    onChange(updateTask);
  };

  return (
    <C.Container done={isChecked} >
      <input
        id={`${item.id}`}
        type="checkbox"
        checked={isChecked}
        onChange={({ target }) => updateList(target)}
      />
      <label htmlFor={`${item.id}`}>{item.name}</label>
    </C.Container>
  );
};

export default ListItem;
