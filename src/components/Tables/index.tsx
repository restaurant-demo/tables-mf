import React from 'react';
import TableRow from '../TableRow';
import AddButtons from '../AddButtons';
import CabinetRow from '../CabinetRow';

const Tables = () => {
  return (
    <>
      <section>
        <div>
          <AddButtons />
        </div>
        <div>
          <div className="flex items-center justify-between border-b p-2 bg-gray-200 rounded-t-lg shadow-md">
            <span className="w-10 text-center font-semibold">#</span>
            <span className="flex-1 px-2 font-semibold">Name</span>
            <span className="flex-1 px-2 font-semibold">Description</span>
            <span className="flex-1 px-2 font-semibold">Location</span>
            <span className="flex-1 px-2 font-semibold">Status</span>
            <span className="w-16 text-center font-semibold">Actions</span>
          </div>
          <TableRow />
          <TableRow number={2} status="busy" />
          <TableRow number={3} />
          <TableRow number={4} status="reserved" />
        </div>
        <br />
        <div>
          <div className="flex items-center justify-between border-b p-2 bg-gray-200 rounded-t-lg shadow-md">
            <span className="w-10 text-center font-semibold">#</span>
            <span className="flex-1 px-2 font-semibold">Image</span>
            <span className="flex-1 px-2 font-semibold">Name</span>
            <span className="flex-1 px-2 font-semibold">Description</span>
            <span className="flex-1 px-2 font-semibold">Capacity</span>
            <span className="flex-1 px-2 font-semibold">Price/Hour</span>
            <span className="flex-1 px-2 font-semibold">Type</span>
            <span className="flex-1 px-2 font-semibold">Status</span>
            <span className="w-16 text-center font-semibold">Actions</span>
          </div>
          <CabinetRow />
          <CabinetRow />
        </div>
      </section>
    </>
  );
};

export default Tables;
