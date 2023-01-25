import dbConnect from '@/../lib/mongo'
import Conversation from '@/../models/Conversation'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const conversations = await Conversation.find({})
        res.status(200).json(conversations)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const conversations = await Conversation.create(req.body)
        res.status(201).json(conversations)
      } catch (error) {
        const conversations = await Conversation.create(req.body)
        res.status(400).json(conversations)
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
