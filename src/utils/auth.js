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
            if(response.status === 200){
                return response.json()
                    .then(data=>{
                        Cookies.set('session', data.token);
                        setUser({
                            name: data.name,
                            legalName: data.user,
                            email: data.token,
                        });
                        return navigate(`/app/profile`)
                    })
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
    setUser({})
    callback()
}
