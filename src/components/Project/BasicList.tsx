import React from "react";

interface Props {
  listElements: string[];
}

const BasicList: React.FC<Props> = ({ listElements }) => {
  return (
    <ul>
      {listElements.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default BasicList;
