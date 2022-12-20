import { createContext, useState, useEffect } from "react";
import React from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

//actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//provider = component that provides context to other components
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
