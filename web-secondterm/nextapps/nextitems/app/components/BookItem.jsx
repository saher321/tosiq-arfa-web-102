import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="flex gap-3 bg-white rounded-md shadow-md">
      <div>
        <img className="rounded-l-lg h-32 w-24" src={book.cover} alt="" />
      </div>
      <div>
        <span className="text-gray-400 text-[11px]">Title</span>
        <div className="font-bold mb-2">{book.title}</div>

        <span className="text-gray-400 text-[11px]">Release date</span>
        <div className="font-bold">{book.releaseDate}</div>
      </div>
    </div>
  );
};

export default BookItem;
