import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
    const Base_Url = "http://localhost:4000";
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AppContext.Provider value={{ Base_Url, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )

}
export default AppProvider;