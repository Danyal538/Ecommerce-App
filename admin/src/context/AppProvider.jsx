import { useState } from "react";
import AppContext from "./AppContext";
import { useEffect } from "react";
import axios from "axios"

const AppProvider = ({ children }) => {
    const Base_Url = "https://ecommercebackend-production-ec6d.up.railway.app";
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        const checkAuth = async () => {
            try {
                const { data } = await axios.get(`${Base_Url}/api/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (data.success) {
                    setIsLoggedIn(true);
                }
                else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
            checkAuth();
        }
    }, [])
    return (
        <AppContext.Provider value={{ Base_Url, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )

}
export default AppProvider;