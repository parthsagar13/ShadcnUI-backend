import User from '../model/Usermodal.js';

export const create = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log incoming data

    const userData = new User(req.body);

    // Validate userData
    if (!userData) {
      return res.status(400).json({ msg: 'Invalid User Data' });
    }

    // Save data to the database
    const savedData = await userData.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error('Error while saving user data:', error.message); // Log error
    res.status(500).json({ error: error.message });
  }
};
