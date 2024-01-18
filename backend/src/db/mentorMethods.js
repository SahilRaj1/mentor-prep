import Mentor from "../models/MentorModel.js";

// Fetch all mentors
export const fetchAllMentors = async (skip, limit, query = {}) => {
    const mentors = await Mentor.find(query)
        .skip(skip)
        .limit(limit);
    return mentors;
};


export const updateMentorInDB = async (userId, updateData) => {
    const filter = { _id: userId, role: "mentor" };
    const options = { $set: updateData };
    const updatedMentor = await updateUser(filter, options);
    return updatedMentor;
};


