const { User } = require('../models')

// 신규회원을 등록한다.
const addUser = async (newUserInfo) => {
  const user = new User(newUserInfo)
  try {
    const data = await user.save()
    return { success: true, result: { data, error: null } }
  } catch (error) {
    return { success: false, result: { data: null, error } }
  }
}

module.exports = { addUser }
