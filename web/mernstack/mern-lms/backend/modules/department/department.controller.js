export const deptList = (req, res) => {
    return res.send({
        status: true,
        list: ["Finance", "Human Resource"]
    })
}

export const create = () => {}