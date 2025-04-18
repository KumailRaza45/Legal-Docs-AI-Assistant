import "./_style.css";
import React from "react";

interface Props {
  onClick?: () => void;
}

const DeleteButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className="delete-button" onClick={onClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
