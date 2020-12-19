exports.authRegister = (req,res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, password, email)
    res.send("Register Completed.")
}
exports.authLogin = (req,res) => {
    res.send("Login Completed.")
}