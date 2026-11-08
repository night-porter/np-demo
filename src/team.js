import { getUser } from './users.js'

export async function teamNames(ids, fetchImpl) {
  const users = await Promise.all(ids.map((id) => getUser(id, fetchImpl)))
  return users.map((u) => u.name)
}
