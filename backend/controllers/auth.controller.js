const { User } = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {

  const { username, email, password } = req.body

  try {
    const user = user.find(username)
    if (user) return res.status(500).send("internal server error!")

    const hashedPssword = await bcrypt.hash(password, 10)

    const createdUser = await User.create({
      username,
      email,
      password: hashedPssword
    })

    return res.status(201).json({ user: createdUser, token })
  } catch (error) {
    return res.status(500).send("Internal server error!")
  }
}

const login = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) return res.status(400).send("username/password incorrect")

  const isMatch = await user.comparePassword(password)
  if (!isMatch) return res.status(400).send("username/password incorrect")

  const token = jwt.sign({ _d: user._id }, process.env.JWT_SECRET)
  return res.status(200).json(user, token)

}

module.exports = { register, login }

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user.model");

// const register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     if (!username || !email || !password) {
//       return res.status(400).json({
//         error: "Username, email and password are required",
//       });
//     }
//     if (password.length < 6) {
//       return res
//         .status(400)
//         .json({ error: "password must be at least 6 characters!" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({
//       username,
//       password: hashedPassword,
//     });
//     await user.save();
//     res.status(201).json({ message: "User Registered Successfully!!" });
//   } catch (error) {
//     console.log(error);
//     return res.send(500).send("Internal server error!");
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ error: "Authentication Failed!" });
//     }
//     const passMatch = await bcrypt.compare(password, user.password);
//     if (!passMatch) {
//       return res.status(401).json({ error: "Authentication Failed!" });
//     }
//     const token = jwt.sign({userId: user._id}, proccess.env.JWT_SECRET_KEY,{
//         expiresIn: "3hrs"
//     });
//     res.status(200).json({token});

//   } catch (error) {
//     console.log(error);
//     return res.send(500).send("Internal server error!");
//   }
// };

// module.exports = { register, login };