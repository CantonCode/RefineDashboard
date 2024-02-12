import type { AuthProvider } from "@refinedev/core";
import { parseJwt } from "./utils/parse-jwt";
import axios from "axios";
import { gapi } from "gapi-script";
import { googleLogout } from "@react-oauth/google";

const authProvider: AuthProvider = {
    login: async ({ token }: any) => {
        const profileObj = token ? parseJwt(token) : null;

        console.log(profileObj)
        if (profileObj) {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    ...profileObj,
                    avatar: profileObj.picture,
                }),
            );

            localStorage.setItem("token", `${token}`);
        

            return {
                success: true,
                redirectTo: "/",
            };
        }
    },
    check: async () => {
        const token = localStorage.getItem("token");

        if (token) {
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            error: {
                message: "Check failed",
                name: "Not authenticated",
            },
            logout: true,
            redirectTo: "/login",
        };
    },
  logout: async (params: any) => {
    const token = localStorage.getItem("token");

    if(token){
        localStorage.removeItem("token");
        axios.defaults.headers.common = {};
        googleLogout();
    }
    
    return {
        success: true,
        redirectTo:'/login'
    };
  },

  onError: async (params: any) => ({}),
};

export default authProvider;