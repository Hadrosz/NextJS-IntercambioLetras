const URL_SIGNUP = '/api/auth/signup'

export const signupPOST = async ({ username, email, password }) => {
  const res = await fetch(URL_SIGNUP, {
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
