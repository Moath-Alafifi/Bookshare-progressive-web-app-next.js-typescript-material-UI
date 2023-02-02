import dbConnect from '@/../server/lib/mongo'
import Conversation from '@/../server/models/Conversation'
import type { NextApiRequest, NextApiResponse } from 'next'

const conversationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    method,
    query: { slug },
  } = req

  await dbConnect()
  switch (method) {
    case 'GET':
      //get conversation of a tow users or one user
      try {
        const conversations =
          (await Conversation.find({
            members: { $all: slug },
          })) ||
          Conversation.find({
            members: { $in: [slug[0]] },
          })
        res.status(200).json(conversations)
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
