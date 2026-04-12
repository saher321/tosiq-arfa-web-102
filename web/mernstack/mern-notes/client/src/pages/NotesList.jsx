import React, { useEffect, useState } from "react";
import WebLayout from "../layouts/WebLayout";
import axios from "axios";
import { NOTE_DEL_API, NOTES_API } from "../utils/apis";
import toast from "react-hot-toast";
import { NoteItem } from "../components/notes/NoteItem";

export const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleModel, setToggleModel] = useState(false);

  const openModel = () => {
    setToggleModel(true);
  };
  const closeModel = () => {
    setToggleModel(false);
  };

  const getNotes = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(NOTES_API);
      console.log(response);
      if (response.data && response.data.notesList) {
        setNotes(response.data.notesList);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Network error!");
      console.log("ERR: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const deleteNote = async (e, id) => {
    e.preventDefault();
    if (!confirm("Do you want to delete this? ")) return;
    try {
      const response = await axios.delete(NOTE_DEL_API + `/${id}`);
      if (response.data && response.data.status == false) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        await getNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WebLayout>
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold">All Notes</div>
          <div>
            <button
              onClick={openModel}
              className="text-sm bg-green-900 text-white p-2 rounded-lg shadow"
            >
              Add notes
            </button>
          </div>
        </div>

        <div>
          {isLoading ? (
            "Loadig..."
          ) : (
            <div className="my-4 grid grid-cols-12 gap-3">
              {notes.length > 0 ? (
                notes.map((note, i) => {
                  return (
                    <div
                      key={i}
                      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
                    >
                      <NoteItem
                        note={note}
                        deleteNote={(e) => deleteNote(e, note._id)}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="col-span-12">No records were found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* add/edit model */}
      {/* Overlay */}
      {toggleModel && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-[4px] z-40"></div>
      )}
      {toggleModel && (
        
        <div className="z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm max-w-lg rounded-lg border border-gray-200 overflow-hidden shadow bg-white p-4">
          <h2 className=" font-semibold mb-2">Add notes</h2>
          <form>
            <div>
              <div>
                <label>Title</label>
                <input type="text" className="w-full block my-3 p-2 rounded-lg border border-gray-300 bg-gray-100" placeholder="Enter title" />
              </div>

              <div>
                <label>Content</label>
                <textarea type="text" rows={5} cols={50} className="max-w-lg block my-3 p-2 rounded-lg border border-gray-300 bg-gray-100" placeholder="Enter content"></textarea>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={closeModel}
                className="w-1/3 p-2 text-sm border border-gray-300 bg-gray-200 text-black rounded-lg shadow"
              >
                Cancel
              </button>
              <button className="w-1/3 p-2 text-sm bg-green-900 text-white rounded-lg shadow">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </WebLayout>
  );
};
