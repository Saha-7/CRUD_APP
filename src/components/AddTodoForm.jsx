import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "../store/features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";


const AddTodoForm = () => {

    const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert("Enter a todo");
      setInput("");
      return;
    } else {
      dispatch(
        todoAdded({
          id: nanoid(),
          title: input,
        })
      );
      setInput("");
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit} className='flex space-x-3'>
        <input
            type='text'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-semibold leading-tight focus:outline-none focus:shadow-outline bg-white' 
            placeholder=' Add Something'
        />
        <button 
            type="submit"
            className="bg-blue-800 text-white p-3 rounded-md hover:bg-blue-500 transition-all duration-300 py-2 px-10 font-bold">
            Add
        </button>
      </form>
    </>
  )
}

export default AddTodoForm
