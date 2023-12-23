export const userDataUpdate = async ({
  username,
  firstName,
  lastName,
  country,
  city,
  tel,
}) => {
  const res = await fetch('/api/session/user', {
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

export const passwordUserUpdate = async (username, password) => {
  const res = await fetch('/api/session/password', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
      username,
    }),
  })
  const resJSON = await res.json()
  return { res, resJSON }
}
