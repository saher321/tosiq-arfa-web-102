import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { NOTE_DEL_API, NOTES_API } from '../utils/apis'
import toast from 'react-hot-toast'
import { NoteItem } from '../components/notes/NoteItem'

export const NotesList = () => {
  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getNotes = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(NOTES_API)
      console.log(response)
      if(response.data && response.data.notesList) {
        setNotes(response.data.notesList)
        setIsLoading(false)
      }
    } catch (error) {
      toast.error("Network error!")
      console.log('ERR: ',error)
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getNotes()
  }, [])

  const deleteNote = async (e, id) => {
    e.preventDefault()
    if(!confirm("Do you want to delete this? ")) return;
    try {
      const response = await axios.delete(NOTE_DEL_API + `/${id}`)
      if (response.data && response.data.status == false){
        toast.error(response.data.message)
      } else {
        toast.success(response.data.message)
        await getNotes()
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <WebLayout>
      <div>
        <div className='text-xs font-bold'>All Notes</div>

        <div>
        { isLoading ? "Loadig..." :
          <div className='my-4 sm:mx-4 md:mx-4 grid grid-cols-12 gap-3'>
          {
            notes.length > 0 ? 
            notes.map((note, i)=>{
              return (
                <div key={i} className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'>
                  <NoteItem note={note} deleteNote={(e) => deleteNote(e, note._id)}/>
                </div>
              )
            }) :
            <div className="col-span-12">No records were found</div>
          }
          </div>

        }
        
        </div>
      </div>
    </WebLayout>
  )
}
