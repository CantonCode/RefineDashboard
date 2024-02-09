
import { AuthProvider } from "@refinedev/core/dist/interfaces";
import { parseJwt } from "./utils/parse-jwt";
import axios from "axios";

const authProvider: AuthProvider = {
        login: async ({ credential }: CredentialResponse) => {
            const profileObj = credential ? parseJwt(credential) : null;

            if (profileObj) {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        ...profileObj,
                        avatar: profileObj.picture,
                    }),
                );

                localStorage.setItem("token", `${credential}`);

                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
            };
        },
        logout: async () => {
            const token = localStorage.getItem("token");

            if (token && typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                axios.defaults.headers.common = {};
                window.google?.accounts.id.revoke(token, () => {
                    return {};
                });
            }

            return {
                success: true,
                redirectTo: "/login",
            };
        },
        onError: async (error:any) => {
            if (error.response?.status === 401) {
                return {
                    logout: true,
                };
            }

            return { error };
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
        // getPermissions: async () => null,
        getIdentity: async () => {
            const user = localStorage.getItem("user");
            if (user) {
                return JSON.parse(user);
            }

            return null;
        },
    };

    export default authProvider;
