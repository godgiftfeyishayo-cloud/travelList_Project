import { useState } from "react";
import Display from "./Display";
import Form from "./Form";
import { toast } from "react-toastify";

export default function Main() {
  const [listOfItems, setListOfItems] = useState([]);

  function handleAddNewItem(newItem) {
    const exist = listOfItems.find((x) => x.item == newItem.item);
    if (exist?.item) return toast.error(`Item ${newItem.item} already exists!`);
    setListOfItems([...listOfItems, newItem]);
    toast.success("Item added successfully");
  }

  function handleRemoveItem(selectedItem) {
    const updatedList = listOfItems.filter((x) => x.item !== selectedItem);
    setListOfItems(updatedList);
    toast.warn(`Item ${selectedItem} has been deleted!`);
  }

  return (
    <main>
      <Form addNewItem={handleAddNewItem} />
      <Display items={listOfItems} deleteItem={handleRemoveItem} />
    </main>
  );
}
