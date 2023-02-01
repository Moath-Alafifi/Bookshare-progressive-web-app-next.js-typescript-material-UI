import dbConnect from '@/../server/lib/mongo'
import Users from '@/../server/models/Users'

import type { NextApiRequest, NextApiResponse } from 'next'

const usersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const users = await Users.find({})
        res.status(200).json(users)
      } catch (error) {
        res.status(400).json(error)
      }
      break
    case 'POST':
      try {
        const users = await Users.create(req.body)
        res.status(201).json(users)
      } catch (error) {
        res.status(400).json(error)
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
export default usersHandler
