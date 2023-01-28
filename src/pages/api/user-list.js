import userList from "./db/userTable"
export default function handler(_, res) {
    res.status(200).send(userList)
  }
  