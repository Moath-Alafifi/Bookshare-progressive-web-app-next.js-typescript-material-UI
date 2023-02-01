import mongoose, { Schema, Document, Model } from 'mongoose'

interface IUsers extends Document {
  _id: string
  userName: string
  email: string
  password: string
  profilePicture?: string
  followers?: []
  followings?: []
  isAdmin?: boolean
  desc: string
  city?: string
  from?: string
  timestamps: {
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }
}

const usersSchema = new Schema<IUsers>(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: '',
    },

    followers: {
      type: [],
      default: [],
    },
    followings: {
      type: [],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
)
export default (mongoose.models.Users as Model<IUsers>) ||
  mongoose.model<IUsers>('Users', usersSchema)
