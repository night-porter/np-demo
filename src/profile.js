import { fetchUser } from './users.js'

export async function profileCard(id) {
  const u = await fetchUser(id)
  return `${u.name} <${u.email}>`
}
