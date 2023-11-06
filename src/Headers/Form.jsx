import React, { useContext, useState } from "react";
import "./Form.css";
import { TodoContext } from "../Context/TodoProvider";

const Form = () => {
  const { onSubmit } = useContext(TodoContext);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== "") {
      onSubmit(content);
      setContent("");
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="title"
        type="text"
        placeholder="what do you want to do?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </form>
  );
};

export default Form;
