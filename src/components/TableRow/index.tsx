import React from 'react';

const TableRow = ({
  number = 1,
  name = 'Table',
  description = 'lorem ipsum',
  location = '',
  status = 'available',
  onEdit = {},
  onDelete = {}
}) => {
  return (
    <>
      <div className="flex items-center justify-between border-b p-2 bg-vanilla-white rounded-lg shadow-md overflow-hidden relative">
        <span className="w-10 text-center">{number}</span>
        <span className="flex-1 px-2">{name}</span>
        <span className="flex-1 px-2">{description}</span>
        <span
          className="flex-1 px-2 text-sm font-medium 
        {location === 'indoor' ? 'text-blue-600' : location === 'outdoor' ? 'text-yellow-600' : 'text-gray-600'}"
        >
          {location || 'none'}
        </span>
        <span
          className="flex-1 px-2 text-sm font-medium 
        {status === 'Active' ? 'text-green-600' : 'text-red-600'}"
        >
          {status}
        </span>
        <button
          className="p-1 bg-gray-100 rounded-full hover:bg-gray-200"
          // onClick={onEdit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button
          className="p-1 bg-red-100 rounded-full hover:bg-red-200"
          // onClick={onDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 6h18v2H3V6zm2 3h14v12H5V9zm5 2v8h2v-8h-2zm4 0v8h2v-8h-2z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TableRow;
