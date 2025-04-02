/** @format */

import { useEffect, useState } from "react";
import { getAuthToken } from "../service/api";

const useAuth = (username: string) => {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("authToken")
    );

    useEffect(() => {
        const fetchToken = async () => {
            if (!token) {
                try {
                    const authToken = await getAuthToken(username);
                    setToken(authToken);
                    localStorage.setItem("authToken", authToken); // Сохраняем токен
                    console.log("Токен сохранен в localStorage:", authToken);
                } catch (error) {
                    console.error("Ошибка авторизации:", error);
                }
            }
        };

        fetchToken();
    }, [username, token]);

    return token;
};

export default useAuth;
