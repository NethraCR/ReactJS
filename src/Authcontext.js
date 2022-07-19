import React, { useState } from 'react';

const Authcontext = React.createContext({
token:'',
isUserLoggedIn: false,
login: (token) => {},
logout: () => {}
});

export const AuthContextProvider = (props) => {
const [token,setToken] = useState(null);
const userIsLoggedIn = !!token;
const loginHandler = (token) => setToken(token);
const logOutHandler = () => setToken(null);
const AuthValue = {
token : token,
isUserLoggedIn: userIsLoggedIn,
login:loginHandler,
logout: logOutHandler
}
return (
<AuthContextProvider value={AuthValue}>
{props.children}
</AuthContextProvider>
)
}
export default Authcontext;