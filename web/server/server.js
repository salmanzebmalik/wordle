import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/user.model.js';
import jwt, { decode } from 'jsonwebtoken';

const app = express();

app.use(cors());
app.use(express.json());

//https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = "mongodb+srv://salmanmalik:Codehub123@cluster0.qe4zh.mongodb.net/apexam?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () =>
        console.log(`Server running on port: ${PORT}`)
    ))
    .catch(
        (error) => console.log(error.message)
    );

app.post('/login', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({message: 'User not found!'});
    }
    
    if (password !== user.password) {
        return res.status(400).json({message: 'Invalid credentials'});
    }
    
    const token = jwt.sign({
        email: user.email,
        userId: user._id,
        username: user.username,
    }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ user: token , message: "Login Successful" });
}
);

app.post('/register', async (req, res) => {
    const { email, password, name, username } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).send({error: 'User already exists'});
    }
    const newUser = new User({
        email,
        password,
        name,
        username
    });
    await newUser.save();
    res.status(201).send('User created successfully');
}
);
