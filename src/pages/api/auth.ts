import dbConnect from '@/../server/lib/mongo'
import Users from '@/../server/models/Users'
import type { NextApiRequest, NextApiResponse } from 'next'

const authHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const user = await Users.find({})
        res.status(200).json(user)
      } catch (error) {
        res.status(400).json(error)
      }
      break
    case 'POST':
      const { email, password } = req.body
      try {
        const user = await Users.findOne({ email: email, password: password })
        res.status(201).json(user)
      } catch (error) {
        res.status(400).json(error)
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
export default authHandler
