import mongoose, { Schema, Document, Model } from 'mongoose'

interface IAuthUser extends Document {
  _id: string
  userName: string
  email: string
  timestamps: {
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }
}

const authUserSchema = new Schema<IAuthUser>(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
)
export default (mongoose.models.AuthUser as Model<IAuthUser>) ||
  mongoose.model<IAuthUser>('AuthUser', authUserSchema)
