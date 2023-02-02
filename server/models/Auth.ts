import mongoose, { Schema, Document, Model } from 'mongoose'

interface IAuth extends Document {
  _id: string
  email: string
  password: string
  timestamps: {
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }
}

const authSchema = new Schema<IAuth>(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
)
export default (mongoose.models.Auth as Model<IAuth>) ||
  mongoose.model<IAuth>('Auth', authSchema)
