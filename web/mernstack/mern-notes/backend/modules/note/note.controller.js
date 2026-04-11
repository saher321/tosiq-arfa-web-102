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

export const del = async (req, res) => {
    const { id } = req.params

    if(!id){
        return res.send({
            status: false,
            message: "Note id not provided"
        })
    }

    try {
        const note = await Note.findByIdAndDelete({_id: id})
        if (!note) {
            return res.send({
                status: false,
                message: "Note id not found"
            })
        } 
        return res.send({
            status: true,
            message: "Note has been deleted"
        })
    } catch (error) {
        console.log(error)
    }
}