const user_registration = (req, res) =>
{
    const { name, email, age, password } = req.body
    res.json({name, email, age, password})
}
module.exports = user_registration