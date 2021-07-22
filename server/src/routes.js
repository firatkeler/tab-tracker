module.exports = (app) => {
    app.post('/register', (req, res) => {
        res.send({
            message: `have fun ${req.body.email}!`
        })
    })
}
