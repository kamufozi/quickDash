import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdCheckboxOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="m-10 text-2xl border border-black rounded-2xl w-[50%] h-[50%] p-8">
      <div className="flex flex-row gap-4 justify-center">
        <IoMdCheckboxOutline size={28} />
        <h1 className="">Todo List</h1>
      </div>

      <div className="flex flex-row mt-8 space-x-2">
        <input
          type="text"
          name="todo"
          placeholder="Add a new task..."
          className="border border-black rounded-2xl p-1 w-[100%] shadow-black"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            console.log(e.target.value);
          }}
        />
        <CiSquarePlus
          size={40}
          onClick={() => setTodos((prevTodo) => [...prevTodo, input])}
        />
      </div>
      <ul>
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <div className="flex flex-row justify-between mt-4">
                <input type="checkbox" name="todo" />
                <li key={index}>{todo}</li>
                <RiDeleteBin6Line size={28} />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default ToDo;
