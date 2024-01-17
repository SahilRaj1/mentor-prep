import bcrypt from 'bcrypt';
import signToken from "../utils/token.js";
import dotenv from "dotenv";
import { validationResult } from "express-validator";
import { fetchUserByEmail, createUser, fetchUserByUsername } from "../db/userMethods.js";

dotenv.config();

const saltRounds = Number(process.env.SALT_ROUNDS);

// ROUTE 1: Create a user using: POST 'api/auth/mentor/signup". No login required
export const mentorSignup = async (req, res) => {

    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const {email, username, password, role, name} = req.body;

        if (role != "mentor") {
            return res.status(400).json({success, error: "Sign up as a mentor"});
        }

        let user = await fetchUserByEmail(email);
        if (user) {
            return res.status(400).json({success, error: "Email already exists"});
        }

        user = await fetchUserByUsername(username);
        if (user) {
            return res.status(400).json({success, error: "Username already exists"});
        }

        // Salting password
        const salt = await bcrypt.genSalt(saltRounds);
        const secPass = await bcrypt.hash(password, salt);

        // Creating a new user
        user = await createUser({
            username: username,
            password: secPass,
            email: email,
            role: role,
            profile: {
                name: name,
            },
        });

        const authtoken = signToken(user._id, user.role);

        success = true;
        res.status(201).json({success, authtoken});

    } catch (error) {

        console.log(error.message);
        res.status(500).send("Internal server error");

    }

}

// ROUTE 2: Authenticate a user using: POST 'api/auth/mentor/login". No login required
export const mentorLogin = async (req, res) => {

    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const {email, password, role} = req.body;

        if (role != "mentor") {
            return res.status(400).json({success, error: "Login as a mentor"});
        }

        // Finding if user exists
        let user = await fetchUserByEmail(email);
        if (!user) {
            return res.status(400).json({success, error: "User not found"});
        }

        // Matching user password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({success, error: "Incorrect credentials"});
        }

        const authtoken = signToken(user._id, user.role);

        success = true;
        res.status(200).json({success, authtoken});

    } catch (error) {

        console.log(error.message);
        res.status(500).send("Internal server error");

    }

}

// ROUTE 3: Create a user using: POST 'api/auth/mentee/signup". No login required
export const menteeSignup = async (req, res) => {

    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const {email, username, password, role, name} = req.body;

        if (role != "mentee") {
            return res.status(400).json({success, error: "Sign up as a mentee"});
        }

        let user = await fetchUserByEmail(email);
        if (user) {
            return res.status(400).json({success, error: "Email already exists"});
        }

        user = await fetchUserByUsername(username);
        if (user) {
            return res.status(400).json({success, error: "Username already exists"});
        }

        // Salting password
        const salt = await bcrypt.genSalt(saltRounds);
        const secPass = await bcrypt.hash(password, salt);

        // Creating a new user
        user = await createUser({
            username: username,
            password: secPass,
            email: email,
            role: role,
            profile: {
                name: name,
            },
        });

        const authtoken = signToken(user._id, user.role);

        success = true;
        res.status(201).json({success, authtoken});

    } catch (error) {

        console.log(error.message);
        res.status(500).send("Internal server error");

    }

}

// ROUTE 4: Authenticate a user using: POST 'api/auth/mentor/login". No login required
export const menteeLogin = async (req, res) => {

    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const {email, password, role} = req.body;

        if (role != "mentee") {
            return res.status(400).json({success, error: "Login as a mentee"});
        }

        // Finding if user exists
        let user = await fetchUserByEmail(email);
        if (!user) {
            return res.status(400).json({success, error: "User not found"});
        }

        // Matching user password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({success, error: "Incorrect credentials"});
        }

        const authtoken = signToken(user._id, user.role);

        success = true;
        res.status(200).json({success, authtoken});

    } catch (error) {

        console.log(error.message);
        res.status(500).send("Internal server error");

    }

}

// ROUTE 4: Authenticate a user using: POST 'api/auth/admin/login". No login required
export const adminLogin = async (req, res) => {

    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const {email, password, role} = req.body;

        if (role != "admin") {
            return res.status(400).json({success, error: "Login as a admin"});
        }

        // Finding if user exists
        let user = await fetchUserByEmail(email);
        if (!user) {
            return res.status(400).json({success, error: "Incorrect credentials"});
        }

        // Matching user password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({success, error: "Incorrect credentials"});
        }

        const authtoken = signToken(user._id, user.role);

        success = true;
        res.status(200).json({success, authtoken});

    } catch (error) {

        console.log(error.message);
        res.status(500).send("Internal server error");

    }

}
