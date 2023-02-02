import dbConnect from '@/../server/lib/mongo'
import Message from '@/../server/models/Message'
import type { NextApiRequest, NextApiResponse } from 'next'

const messageHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const messages = await Message.find({})
        res.status(200).json(messages)
      } catch (error) {
        res.status(400).json(error)
      }
      break
    case 'POST':
      const newMessage =new Message(req.body)
      try {
        const savedMessage = await newMessage.save()
        res.status(201).json(savedMessage)
      } catch (error) {
        res.status(400).json(error)
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
export default messageHandler
