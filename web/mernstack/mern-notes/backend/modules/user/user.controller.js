import bcrypt from "bcryptjs";
import User from "./user.model.js";
import { sendEmail } from "../../utils/sendEmail.js";

export const register = async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (user) {
            return res.send({
                status: false,
                message: "User already exist with this email, try new one"
            })
        }

        const randomStr = await bcrypt.genSalt(10);
        const encPassword = await bcrypt.hash(password, randomStr);

        const newuser = new User({name, email, password: encPassword})
        const result = await newuser.save()

        const content = `
        Hi ${name}, Thank you for choosing our platform.
        <br />
        Stay in touch.

        <br />
        Regards:
        <strong>NOTLIFY</strong>
        `

        if (result) {

            sendEmail(email, "Thanks for your registration 🎉", content)

            return res.send({
                status: true,
                message: "Registered successfully"
            })
        } else {
            
            return res.send({
                status: false,
                message: "Failed to register"
            })
        }
        
    } catch (error) {
        console.log("ERR: ", error)
    }
}

export const login = async (req, res) => {
    
}