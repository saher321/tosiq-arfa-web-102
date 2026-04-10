import Note from "./note.model.js"

export const notes = async (req, res) => {
    // const notesList = [
    //     "This is our note 1",
    //     "Today is our working day"
    // ]

    const notesList = await Note.find({})

    return res.send({
        status: true,
        notesList
    })
}