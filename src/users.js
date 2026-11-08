export async function fetchUser(id) {
  const res = await fetch(`https://api.example.com/users/${id}`)
  return res.json()
}
