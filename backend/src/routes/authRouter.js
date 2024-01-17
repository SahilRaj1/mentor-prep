import { body } from "express-validator";
import { mentorLogin, mentorSignup, menteeLogin, menteeSignup, adminLogin } from "../controllers/authController.js";
import { Router } from "express";

const router = Router();

// ROUTE 1: Create a user using: POST 'api/auth/createuser". No login required
router.post('/mentor/signup', [
    body('email', 'Enter a valid email').isEmail(),
    body('role', 'Role should be mentor').equals("mentor"),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password should contain atleast 8 characters').isLength({ min: 8 }),
], mentorSignup);

// ROUTE 2: Authenticate a user using: POST 'api/auth/login". No login required
router.post('/mentor/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('role', 'Role should be mentor').equals("mentor"),
    body('password', 'Password cannot be blank').exists(),
], mentorLogin);

// ROUTE 3: Create a user using: POST 'api/auth/mentee/signup". No login required
router.post('/mentee/signup', [
    body('email', 'Enter a valid email').isEmail(),
    body('role', 'Role should be mentor').equals("mentee"),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password should contain atleast 8 characters').isLength({ min: 8 }),
], menteeSignup);

// ROUTE 4: Authenticate a user using: POST 'api/auth/mentee/login". No login required
router.post('/mentee/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('role', 'Role should be mentor').equals("mentee"),
    body('password', 'Password cannot be blank').exists(),
], menteeLogin);

// ROUTE 4: Authenticate a user using: POST 'api/auth/mentee/login". No login required
router.post('/admin/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('role', 'Role should be mentor').equals("admin"),
    body('password', 'Password cannot be blank').exists(),
], adminLogin);


export default router;