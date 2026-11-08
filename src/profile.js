import { getUser } from './users.js'

export async function profileCard(id) {
  const u = await getUser(id)
  return `${u.name} <${u.email}>`
}
