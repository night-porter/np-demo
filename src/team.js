import { fetchUser } from './users.js'

export async function teamNames(ids, fetchImpl) {
  const users = await Promise.all(ids.map((id) => fetchUser(id, fetchImpl)))
  return users.map((u) => u.name)
}
