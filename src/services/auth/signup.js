const URL_SIGNUP = ''

export const signupPOST = async ({ username, email, password }) => {
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const resJSON = await res.json()
  return { res, resJSON }
}
