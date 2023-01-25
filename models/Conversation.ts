import mongoose, { Schema, Types, Document, Model  } from 'mongoose'

interface IConversation extends Document {
  _id?: Types.ObjectId
  members: Types.Array<number>
  timestamps?: {
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }
}

const ConversationSchema = new Schema<IConversation>(
  {
    members: {
      type: [Number],
    },
  },
  {
    timestamps: true,
  }
)
export default (mongoose.models.Conversation as Model<IConversation>) ||
  mongoose.model<IConversation>('Conversation', ConversationSchema)
