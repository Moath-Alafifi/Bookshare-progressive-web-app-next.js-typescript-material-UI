import mongoose, { Schema, Types, Document, Model } from 'mongoose'
interface IConversation extends Document {
  _id: string
  members: Types.Array<string>
  senderId: string
  receiverId: string
  timestamps: {
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }
}

const ConversationSchema = new Schema<IConversation>(
  {
    members: {
      type: [String],
    },
    senderId: {
      type: String,
    },
    receiverId: {
      type: String,
    },
  },
  { timestamps: true }
)
export default (mongoose.models.Conversation as Model<IConversation>) ||
  mongoose.model<IConversation>('Conversation', ConversationSchema)
