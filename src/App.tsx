import {
    Refine,
    GitHubBanner,
    WelcomePage,
    Authenticated,
} from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
    AuthPage, ErrorComponent
    , useNotificationProvider
    , ThemedLayoutV2
    , ThemedSiderV2,
    Layout
} from '@refinedev/antd';
import "@refinedev/antd/dist/reset.css";

import { App as AntdApp } from "antd"
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerProvider, {
    NavigateToResource,
    CatchAllNavigate,
    UnsavedChangesNotifier,
    DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";
import { PostCreate, PostEdit, PostList, PostShow } from './pages';
import { AntdInferencer } from "@refinedev/inferencer/antd";
import { DashboardOutlined } from '@ant-design/icons';
import { DashboardPage } from './pages/dashboard';
import authProvider from "./authProvider";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Login } from './pages/login';
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
})



function App() {
    return (
        <BrowserRouter  >
            <AntdApp>
                
                    <Refine
                        authProvider={authProvider}
                        dataProvider={dataProvider("https://api.finefoods.refine.dev")}
                        routerProvider={routerProvider}
                        resources={[
                            {
                                name: "posts",
                                list: PostList,
                                show: PostShow,
                                create: PostCreate,
                                edit: PostEdit
                            },
                            {
                                name: "dashboard",
                                list: "/",
                                meta: {
                                    label: "Dashboard",
                                    icon: <DashboardOutlined />,
                                },
                            },
                            {
                                name: "orders",
                                
                            }
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                        }}
                        Layout={Layout}
                        catchAll={<ErrorComponent />}>
                        <Routes>
                            <Route
                                element={
                                    <Authenticated
                                        key="authenticated-routes"
                                        fallback={
                                            <CatchAllNavigate to="/login" />
                                        }
                                    >
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }>
                                    
                                <Route index element={
                                    <DashboardPage/>
                                } />
                            </Route>

                            <Route
                                element={
                                    <Authenticated
                                        key="auth-pages"
                                        fallback={<Outlet />}
                                    >
                                        <NavigateToResource resource="dashboard" />
                                    </Authenticated>
                                }
                            >
                                <Route path="/login" element={<Login />} />
                            </Route>

                            <Route
                                element={
                                    <Authenticated key="catch-all">
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            >
                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                        {/* <Routes>
                            
                            <Route
                               element={
                                <Authenticated
                                    key="authenticated-routes"
                                    fallback={
                                        <CatchAllNavigate to="/login" />
                                    }
                                >
                                    <ThemedLayoutV2>
                                        <Outlet />
                                    </ThemedLayoutV2>
                                </Authenticated>
                            }
                            >
                                <Route index element={
                                    <DashboardPage/>
                                } />

<Route
                                element={
                                    <Authenticated
                                        key="auth-pages"
                                        fallback={<Outlet />}
                                    >
                                        <NavigateToResource resource="posts" />
                                    </Authenticated>
                                }
                            >
                                <Route path="/login" element={<Login />} />
                            </Route> */}

                                




                                
                                {/* <Route path="/posts">
                                    <Route index element={<PostList />} />
                                    <Route
                                        path="create"
                                        element={<PostCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<AntdInferencer />}
                                    />
                                    <Route
                                        path="show/:id"
                                        element={<PostShow />}
                                    />
                                </Route> */}
                            {/* </Route>
                        </Routes> */}
                        <UnsavedChangesNotifier />
                    </Refine>

            </AntdApp>
        </BrowserRouter>
    );
};

export default App;
