import { useState } from "react";
import Display from "./Display";
import Form from "./Form";

export default function Main() {
  const [listOfItems, setListOfItems] = useState([]);
  function handleAddNewItem(newItem) {
    setListOfItems([...listOfItems, newItem]);
    console.log(listOfItems)
  }
  return (
    <main>
      <Form addNewItem = {handleAddNewItem}/>
      <Display items = {listOfItems}/>
    </main>
  );
}
