import { useState } from "react";
import axios from "axios";
import { FaImage } from "react-icons/fa";

export const AddPost = () => {
  const [textInput, setTextInput] = useState("");
  const [textArea, setTextArea] = useState("");
  const [showArea, setShowArea] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!textInput) return alert("Please type something first!");
    axios
      .post("http://localhost:3005/posts", {
        userId: localStorage.getItem("userId"),
        description: textInput,
        picturePath: textArea,
      })
      .then((res) => {
        console.log(res.data);
        setTextInput("");
        setTextArea("");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="add-post-div">
      <div className="add-post-div-container">
        <form className="add-post-form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Type anything..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          {showArea && (
            <textarea
              value={textArea}
              placeholder="Add image URL"
              onChange={(e) => setTextArea(e.target.value)}
              className="textarea"
            ></textarea>
          )}
          <button>Send</button>
        </form>
        <FaImage onClick={() => setShowArea(!showArea)} className="icon" />
      </div>
    </div>
  );
};
