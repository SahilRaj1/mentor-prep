import Mentee from "../models/MenteeModel.js";

// Fetch all mentees
export const fetchAllMentees = async (skip, limit, query = {}) => {
    const mentees = await Mentee.find(query)
        .skip(skip)
        .limit(limit);
    return mentees;
};

export const createNewMentee = async (id) => {
    const mentee = await Mentee.create({ user_id: id });
    return mentee;
}

export const updateOneMentee = async (userId, updateData) => {
    const filter = { _id: userId, role: "mentee" };
    const options = { $set: updateData };
    const updatedMentee = await updateUser(filter, options);
    return updatedMentee;
};