import React from 'react';
import { EModalType } from "main/modalTypes";
import { useModalStore } from "main/modalStore";

const AddButtons = () => {
  const { setModal } = useModalStore();

  return (
    <div className="flex justify-end space-x-4 p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setModal(true, EModalType?.TABLE)}
      >
        + Table
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => setModal(true, EModalType?.CABINET)}
      >
        + Cabinet
      </button>
    </div>
  );
};

export default AddButtons;
