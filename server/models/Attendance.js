import mongoose from "mongoose";

const attendancechema = new mongoose.Schema({
    email: {type: mongoose.Schema.Types.ObjectId, ref:
    "Employee", required: true},
    date: {type: Date, required: true},
    checkIn:{type: Date, default: null},
    checkOut: {type: Date, required: null},
    status: {type: String, enum: ["PRESENT", "ABSENT", "LATE",],
    default: "PRESENT" },
    workingHours: {type: Number, default: null},
    dayType: {type: String, enum: ["Full Day", "Three Quater Day",
    "Half Day", "Short Day", null], default: null},

}, {timestamps: true})

attendancechema.index({employeeId: 1, date: 1}, {unique: true})


const Attendance = mongoose.models.Attendance || mongoose.model
("Attendance", attendancechema)

export default Attendance;