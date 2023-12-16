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

export const usernamePUT = async ({ username, email, oldUsername }) => {
  const res = await fetch('/api/username', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      oldUsername,
      username,
      email,
    }),
  })
  const resJSON = await res.json()
  return { res, resJSON }
}

export const passwordPUT = async (username, password) => {
  const res = await fetch('/api/password', {
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
