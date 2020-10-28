import { navigate } from "gatsby"

const Cookies = require('js-cookie');

const isBrowser = typeof window !== `undefined`

const getUser = () =>
    window.localStorage.gatsbyUser
        ? JSON.parse(window.localStorage.gatsbyUser)
        : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ username, password }, clearSubmitButton, setError) => {
  if (!isBrowser) return false

  // if (username === `gatsby` && password === `demo`) {
  //   console.log(`Credentials match! Setting the active user.`)
  //   return setUser({
  //     name: `Jim`,
  //     legalName: `James K. User`,
  //     email: `jim@example.org`,
  //   })
  // }

  const data = { email: username, password: password };

  fetch('https://express-api-krissg.netlify.app/.netlify/functions/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
      .then(response => {
          if(response.status === 400){
              return response.json()
                  .then(data=>{
                      clearSubmitButton()
                      setError(data.error)
                  })
          }
          if(data.status === 200){
              Cookies.set('session', data.json.token);
              setUser({
                  name: data.json.name,
                  legalName: data.json.user,
                  email: data.json.token,
              });
          }
          return navigate(`/app/profile`)
      })
      .catch((error) => {
        console.error('Error:', error);
          clearSubmitButton()
      });

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

    Cookies.remove('session');
  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  callback()
}
