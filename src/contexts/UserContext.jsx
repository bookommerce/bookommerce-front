import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)    
    const [user, setUser] = useState(undefined)
    const [token, setToken] = useState(undefined)

    if(loading) {
        return null;
    }

    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading, disabled, setDisabled, token, setToken }}>
            {children}
        </UserContext.Provider>
    )
}