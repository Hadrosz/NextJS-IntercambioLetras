export const userPUT = async ({
  username,
  firstName,
  lastName,
  country,
  city,
  tel,
}) => {
  const res = await fetch('/api/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      country,
      city,
      tel,
    }),
  })
  const resJSON = await res.json()
  return { res, resJSON }
}
