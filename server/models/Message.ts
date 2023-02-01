import mongoose, { Schema, Document, Model } from 'mongoose'
interface IMessage extends Document {
  conversationId: string
  sender: string
  text: string
  timestamps: {
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }
}

const MessageSchema = new Schema<IMessage>(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
)
export default (mongoose.models.Message as Model<IMessage>) ||
  mongoose.model<IMessage>('Message', MessageSchema)
