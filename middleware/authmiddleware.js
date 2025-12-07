import jwt from 'jsonwebtoken';
import User from '../models/user.js';





const protect = async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split()[1];
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();

        }
        catch (error) {
            res.status(401).json({ message: "Not Authorized, Token Failed" });
        }
    } else {
        res.status(401).json({ message: "Not Authorized, Token Failed" });
    }

}


export { protect };