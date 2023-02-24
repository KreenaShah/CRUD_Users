import User from "../schema/userSchema.js";

export const addUser = async (request, response) => {
  const user = request.body;
  console.log(user);
  const newUser = new User(user);
  try {
    await newUser.save();
    response.status(201).json(newUser);
    // console.log(user);
  }catch (error) {
    response.status(409).json({message : error.message});
  }
};

export const getUsers = async (request , response) => {
    try {
        const users = await User.find({});
        // console.log(users)
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

export const getUser = async (request, response) => {
  try {
    // console.log(request.params.id);
    const user = await User.findOne({ _id: request.params.id });
    // const user = await User.findById(request.params.id);
    response.status(200).json(user);
    // console.log(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editUser = async (request, response) => {
  const user = request.body;
  console.log(user);
  const editUser = new User(user);
  try {
    await User.updateOne({email:user.email},editUser);
    response.status(201).json(editUser);
    // console.log(user);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
