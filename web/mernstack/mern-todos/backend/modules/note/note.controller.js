export const notes = (req, res) => {
    const notesList = [
        "This is our note 1",
        "Today is our working day"
    ]

    return res.send({
        status: true,
        notesList
    })
}