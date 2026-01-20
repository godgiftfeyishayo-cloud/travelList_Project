import { useState } from "react";

export default function Form({addNewItem}) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("1");

  function handleSubmit(e) {
    e.preventDefault();
    addNewItem({ amount, item });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="select_amount">
          <p>What do you need for your 😍 trip?</p>
          <select
            name="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="add_trip">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button>Add</button>
        </div>
      </div>
    </form>
  );
}
