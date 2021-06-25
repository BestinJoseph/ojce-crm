import mongoose from 'mongoose'

const opportunitySchema = mongoose.Schema({
    company: { type: String, require: true },
    contact: { type: String, require: true },
    purpose: { type: String, require: true },
    project: { type: String, require: false },
    value: { type: String, require: false },
    stage: { 
        type: String, require: true, default: "incoming",
        enum: ["incoming", "qualified", "following up", "proposal Sent", "contract", "negotation", "closed"] 
    },
    department: { 
        type: [String], require: true,
        emum: ["geotechnical", "survey", "material", "geophysical", "calibration", "trading", "ojpad", "chemical"] 
    },
    priority: { type: String, require: true, emum: ["low", "medium", "high"], default: "low" },
    status: { type: String, require: true, default: 'open', enum: ["open", "won", "lost", "abandoned", "follow up"] },
    lastcontact: { type: Date, require: true, default: Date.now() },
    nextaction: { 
        type: String, require: false, default: "visit",
        enum: ["phone call", "email", "meeting", "visit", "hold"]
    },
    nextacontact: { type: Date, require: false, default: Date.now() },
    reason: { type: String, require: false, enum: ["competitor", "price", "out of scope", "other"] },
    source: { 
        type: String, require: true, default: "current customer",
        enum: ["current customer", 'customer referral', "personal referral", "website", "social media", "email", "digital campagain", "phone call", "other branches"]
     },
    branch: { type: String, require: false },
    comment: [{type: mongoose.Schema.Types.ObjectId, ref: 'comments'}],
    lastCommented: { type: Date, require: true, default: Date.now() },
    description: { type: String, require: false }
}, {timestamps: true})

export default mongoose.model('opportunities', opportunitySchema)