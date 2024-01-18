import { fetchAllBookings, fetchMenteeBookings, fetchMentorBookings, fetchUpcomingMenteeBookings, fetchUpcomingMentorBookings } from "../db/bookingMethods";
import { fetchUserById } from "../db/userMethods";

// ROUTE 1: get all bookings: GET 'api/bookings". [admin]
export const getAllBookings = async (req, res) => {

    let success = false;

    try {
       
        if (req.user.role != "admin") {
            res.status(401).json({success, error: "Unauthorized"});
            return;
        }

        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const skip = (page - 1) * limit;
        delete req.query.page;
        delete req.query.limit;

        const query = req.query;

        const bookings = await fetchAllBookings(skip, limit, query);
        success = true;

        res.status(200).json({
            success,
            results: bookings.length,
            data: {
                bookings,
            },
        })

    } catch (error) {
       console.log(error.message);
       res.status(500).send("Internal server error");
    }
}

// ROUTE 2: get all bookings of mentor: GET 'api/mentor-bookings/:id". [mentor login]
export const getAllMentorBookings = async (req, res) => {

    let success = false;

    try {
       
        if (req.user.role != "mentor" || req.user._id != req.params.id) {
            res.status(401).json({success, error: "Unauthorized"});
            return;
        }

        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const skip = (page - 1) * limit;
        delete req.query.page;
        delete req.query.limit;

        let bookings = [];
        if (req.query.upcoming) {
            bookings = await fetchMentorBookings(req.params.id, skip, limit);
        } else {
            bookings = await fetchUpcomingMentorBookings(req.params.id, skip, limit);
        }

        bookings.forEach(booking => {
            booking.mentee = fetchUserById(booking.mentee_id);
        });

        success = true;

        res.status(200).json({
            success,
            results: bookings.length,
            data: {
                bookings,
            },
        })

    } catch (error) {
       console.log(error.message);
       res.status(500).send("Internal server error");
    }
}

// ROUTE 3: get all bookings of mentee: GET 'api/mentee-bookings/:id". [mentee login]
export const getAllMenteeBookings = async (req, res) => {

    let success = false;

    try {
       
        if (req.user.role != "mentee" || req.user._id != req.params.id) {
            res.status(401).json({success, error: "Unauthorized"});
            return;
        }

        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const skip = (page - 1) * limit;
        delete req.query.page;
        delete req.query.limit;

        let bookings = [];
        if (req.query.upcoming) {
            bookings = await fetchMenteeBookings(req.params.id, skip, limit);
        } else {
            bookings = await fetchUpcomingMenteeBookings(req.params.id, skip, limit);
        }

        bookings.forEach(booking => {
            booking.mentor = fetchUserById(booking.mentor_id);
        });

        success = true;

        res.status(200).json({
            success,
            results: bookings.length,
            data: {
                bookings,
            },
        })

    } catch (error) {
       console.log(error.message);
       res.status(500).send("Internal server error");
    }
}
