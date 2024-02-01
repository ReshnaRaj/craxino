const Users = require('../Model/UserModel');
const bcrypt = require('bcrypt');

const Signup = async (req, res) => {
  try {
    console.log("signup page is working...");

    // Extract user, profile, and work data from the request body
    const { user, profile, employmentStatus, additionalSavings } = req.body;
    console.log(req.body, "data is getting...");

    // Check if the user with the provided email already exists
    // const existingUser = await Users.findOne({ Useremail: user.email });
    // if (existingUser) {
    //   return res.status(400).json({ message: "User with this email already exists." });
    // }

    // Hash the password before storing it
    const saltRounds = 10;
    console.log(user.password,"password")
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    console.log('Hashed Password:', hashedPassword);

    // Create a new user document with the hashed password
    const newUser = new Users({
        email: user.email,
        mobile: user.mobile,
        dob: profile.dob,
        password: hashedPassword,
        profile: {
          name: profile.name,
          currentAddress: profile.currentAddress,
          longlive: profile.longlive,
          description: profile.description,
        },
        work: {
            currentWorkingStatus: employmentStatus, // Adjust based on the structure
            additionalSaving: additionalSavings, 
        },
        // Add other fields as needed
      });

    // Save the new user document
    const savedUser = await newUser.save();
    console.log(savedUser, "user is saved...");

    res.status(200).json({ message: "New user created", savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { Signup };
