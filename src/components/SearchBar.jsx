import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <div className="rounded-md p-4 mb-4 w-full">
    <h1 className="text-2xl font-bold text-blue-500 mb-4 md:text-left">moonAnimelist</h1>
    <div className="flex items-center justify-between md:justify-start">
      <div className="md:hidden flex-grow">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter the name of the anime"
          className="bg-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>
      <div className="hidden md:block flex-grow ml-4">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter the name of the anime"
          className="bg-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>
    </div>
  </div>
);

export default SearchBar;
