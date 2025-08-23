import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdCheckboxOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const remainingTasks = todos.length - todos.filter(t => t.isChecked).length;
  const completedTasks = todos.length - remainingTasks;

  const handleDelete = (todoToRemove) => {
    setTodos(todos.filter((todo) => todo !== todoToRemove));
  };
  return (
    <div className="m-10 text-xl border border-black rounded-2xl w-[30%] h-[50%] p-8">
      <div className="flex flex-row gap-4 justify-center">
        <IoMdCheckboxOutline size={28} />
        <h1 className="">Todo List</h1>
      </div>

      <div className="flex flex-row mt-8 space-x-2">
        <input
          type="text"
          name="todo"
          placeholder="Add a new task..."
          className="border border-black rounded-2xl p-2 w-[90%] shadow-black"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <CiSquarePlus
          size={43}
          onClick={() => {
            if (!input.trim()) return;
            setTodos((prevTodo) => [
              ...prevTodo,
              { text: input, isChecked: false },
            ]);
            setInput("");
          }}
        />
      </div>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, index) => {
            return (
              <div
                className="flex flex-row justify-between mt-4 items-center mb-6"
                key={index}
              >
                <input
                  type="checkbox"
                  name="todo"
                  className="bg-gray-500"
                  checked={todo.isChecked}
                  onChange={() =>
                    setTodos((prevTodo) => {
                      return prevTodo.map((todo, i) =>
                        i == index
                          ? { ...todo, isChecked: !todo.isChecked }
                          : todo
                      );
                    })
                  }
                />
                <li> {todo.isChecked ? <del>{todo.text}</del> : todo.text}</li>
                <RiDeleteBin6Line
                  className="bg-[#F2F4F5] text-red-500 rounded-full"
                  size={23}
                  onClick={() => handleDelete(todo)}
                />
              </div>
            );
          })
        ) : (
          <p>hey</p>
        )}
      </ul>
      <hr />
      <div className="flex justify-between">
        <p> {remainingTasks} remaining</p>
        <p> {completedTasks} completed</p>
      </div>
    </div>
  );
};

export default ToDo;
