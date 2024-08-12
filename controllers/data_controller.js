const get_data = (req, res) =>
{
    res.send("Ye get Data ki Get Api hai")
}
const post_data = (req, res) =>
{

    res.send("Ya post Data ki Post Api hai")
}
const put_data = (req, res) =>
{
    const id = req.params.user_id
    res.send(`Data ki user id ${id} ki Put Api hai`)
}

const delete_data =  (req, res) =>
{
    const delid = req.params.user_id
    res.send(`Data ki user id ${delid} ki Delete Api hai`)
}
module.exports = {
    get_data,
    post_data,
    put_data,
    delete_data,
 
}