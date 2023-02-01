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
      try {
        const messages = await Message.create(req.body)
        res.status(201).json(messages)
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
