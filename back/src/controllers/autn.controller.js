import { User } from '../database/models/User.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save()
        return res.json({ok: true})
    } catch (error) {
        console.log(error)
    }
};

export const login = (req, res) => {
    res.json({ ok: 'login' });
};