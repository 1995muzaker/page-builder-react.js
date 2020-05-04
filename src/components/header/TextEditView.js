import React from "react";
import TextEdit from "./TextEdit";
import { InnerEdit } from "../../styles/Header";

const TextEditView = ({
  description,
  email,
  tel,
  title,
  handleInputChange,
}) => {
  return (
    <div>
      <InnerEdit>
        <TextEdit
          text={title}
          placeholder="Write a title name"
          // childRef={inputRef}
          type="input"
        >
          <input
            // // ref={inputRef}
            type="text"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Write a title name"
            value={title}
            onChange={handleInputChange}
          />
        </TextEdit>
        &nbsp;
        <p> | </p>
        &nbsp;
        <TextEdit
          text={description}
          placeholder="Description for the task"
          // childRef={textareaRef}
          type="textarea"
        >
          <input
            // ref={textareaRef}
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Description for the task"
            rows="5"
            value={description}
            onChange={handleInputChange}
          />
        </TextEdit>
      </InnerEdit>

      <TextEdit
        text={email}
        placeholder="Write a email name"
        // childRef={inputRef}
        type="input"
      >
        <input
          // // ref={inputRef}
          type="text"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          placeholder="Write a email name"
          value={email}
          onChange={handleInputChange}
        />
      </TextEdit>
      <TextEdit
        text={tel}
        placeholder="Write a tel name"
        // childRef={inputRef}
        type="input"
      >
        <input
          // // ref={inputRef}
          type="text"
          name="tel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          placeholder="Write a tel name"
          value={tel}
          onChange={handleInputChange}
        />
      </TextEdit>
    </div>
  );
};

export default TextEditView;
