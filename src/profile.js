import { fetchUser } from './users.js'

export async function profileCard(id) {
  const u = await fetchUser(id)
  return u.email ? `${u.name} <${u.email}>` : u.name
}
