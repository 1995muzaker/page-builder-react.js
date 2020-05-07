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
          placeholder="Write a title"
          type="input"
        >
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            value={title}
            onChange={handleInputChange}
          />
        </TextEdit>
        &nbsp;
        <p> | </p>
        &nbsp;
        <TextEdit
          text={description}
          placeholder="Description"
          type="textarea"
        >
          <input
            name="description"
            placeholder="Description"
            rows="5"
            value={description}
            onChange={handleInputChange}
          />
        </TextEdit>
      </InnerEdit>

      <TextEdit
        text={email}
        placeholder="Write a email"
        type="input"
      >
        <input
          // // ref={inputRef}
          type="text"
          name="email"
          placeholder="Write a email"
          value={email}
          onChange={handleInputChange}
        />
      </TextEdit>
      <TextEdit
        text={tel}
        placeholder="Phone number"
        type="input"
      >
        <input
          type="text"
          name="tel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          placeholder="Phone Number"
          value={tel}
          onChange={handleInputChange}
        />
      </TextEdit>
    </div>
  );
};

export default TextEditView;
