import { customAlphabet } from 'nanoid'

export const generateOTP = () => {
    const nanoid = customAlphabet("1234567890", 8)
    const otp = nanoid()
    return otp
}