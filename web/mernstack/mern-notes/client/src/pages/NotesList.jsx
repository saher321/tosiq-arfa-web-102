import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { NOTES_API } from '../utils/apis'
import toast from 'react-hot-toast'

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

  return (
    <WebLayout>
      <div>
        <div className='text-xs font-bold'>All Notes</div>

        <div>
        { isLoading ? "Loadig..." :
          <ul>
          {
            notes.length > 0 ? 
            notes.map((note, i)=>{
              return (
                <li>{note.title}</li>
              )
            }) :
            <div>No records were found</div>
          }
          </ul>

        }
        
        </div>
      </div>
    </WebLayout>
  )
}
