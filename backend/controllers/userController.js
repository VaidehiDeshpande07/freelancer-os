// Temporary database (array)
let users = [];

// GET all users
const getUsers = (req, res) => {
  res.json({
    success: true,
    data: users
  });
};

// CREATE new user
const createUser = (req, res) => {
  const { name, email } = req.body;

  // Validation check
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and Email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
};

module.exports = {
  getUsers,
  createUser
};