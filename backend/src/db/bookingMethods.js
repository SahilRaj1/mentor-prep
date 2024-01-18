import Booking from "../models/BookingModel";

// fetch list of bookings
export const fetchAllBookings = async (skip, limit, query = {}) => {
    const bookings = await Booking.find(query)
        .skip(skip)
        .limit(limit);
    return bookings;
}

// fetch list of bookings of a mentor
export const fetchMentorBookings = async (mentor_id, skip, limit) => {
    const query = { mentor_id: mentor_id };
    const bookings = await fetchAllBookings(skip, limit, query);
    return bookings;
}

// fetch list of bookings of a mentee
export const fetchMenteeBookings = async (mentee_id, skip, limit) => {
    const query = { mentee_id: mentee_id };
    const bookings = await fetchAllBookings(skip, limit, query);
    return bookings;
}

// fetch list of upcoming bookings of a mentor
export const fetchUpcomingMentorBookings = async (mentor_id, skip, limit) => {
    const currentDate = new Date();
    const query = { mentor_id: mentor_id, dateOfSession: { $gt: currentDate } };
    const bookings = await fetchAllBookings(skip, limit, query);
    return bookings;
}

// fetch list of upcoming bookings of a mentee
export const fetchUpcomingMenteeBookings = async (mentee_id, skip, limit) => {
    const currentDate = new Date();
    const query = { mentee_id: mentee_id, dateOfSession: { $gt: currentDate } };
    const bookings = await fetchAllBookings(skip, limit, query);
    return bookings;
}

// create booking
export const createBooking = async (mentor_id, mentee_id, dateOfSession) => {
    const newBooking = {
        mentor_id: mentor_id,
        mentee_id: mentee_id,
        dateOfSession: dateOfSession,
    };
    const booking = new Booking(newBooking);
    savedBooking = await booking.save();
    return savedBooking;
}