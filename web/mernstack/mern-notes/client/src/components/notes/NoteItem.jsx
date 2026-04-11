import React from "react";
import { VscEdit, VscTrash } from "react-icons/vsc";
import VDivider from "../VDivider";
import { Link } from "react-router";

export const NoteItem = ({ note, deleteNote }) => {

  return (
    <div className="text-sm p-2 rounded-lg border border-gray-300 bg-gray-100">
      <div className="font-bold">
        {note.title}
      </div>

      <div className="text-xs text-gray-700">
        {note.content}
      </div>

      <div className="mt-3 flex items-center justify-between px-4">
        <div>
          <Link>
            <VscEdit />
          </Link>
        </div>
        <VDivider />
        <div>
          <Link onClick={deleteNote}>
            <VscTrash />
          </Link>
        </div>
      </div>
    </div>
  );
};
