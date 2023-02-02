import dbConnect from '@/../server/lib/mongo'
import Conversation from '@/../server/models/Conversation'
import type { NextApiRequest, NextApiResponse } from 'next'

const conversationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req

  await dbConnect()
  switch (method) {
    case 'GET':
      //get all conversations
      try {
        const conversations = await Conversation.find({})
        res.status(200).json(conversations)
      } catch (error) {
        res.status(400).json(error)
      }
      break
    case 'POST':
      //new conversation
      const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
      })
      try {
        const savedConversation = await newConversation.save()
        res.status(201).json(savedConversation)
      } catch (error) {
        res.status(400).json(error)
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
export default conversationHandler
