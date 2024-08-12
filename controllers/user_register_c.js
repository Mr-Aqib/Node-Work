const user_registration = (req, res) =>
{
    const name = req.body.user_name;
    console.log(name);
    res.send(name)
}
module.exports = user_registration