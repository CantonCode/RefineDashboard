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
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";
import { PostCreate, PostEdit, PostList, PostShow } from './pages';
import { AntdInferencer } from "@refinedev/inferencer/antd";
import { DashboardOutlined } from '@ant-design/icons';
import { DashboardPage } from './pages/dashboard';
import 'mapbox-gl/dist/mapbox-gl.css';





function App() {




    return (
        <BrowserRouter  >
            <AntdApp>
                <RefineKbarProvider>
                    <Refine
                        dataProvider={dataProvider("https://api.finefoods.refine.dev")}
                        routerProvider={routerBindings}
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
                        catchAll={<ErrorComponent />}
                    >
                        <Routes>
                            <Route
                                element={
                                    <ThemedLayoutV2>
                                        <Outlet />
                                    </ThemedLayoutV2>
                                }
                            >
                                <Route index element={
                                    <DashboardPage/>
                                } />
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
                            </Route>
                        </Routes>
                        <UnsavedChangesNotifier />
                    </Refine>
                </RefineKbarProvider>
            </AntdApp>
        </BrowserRouter>
    );
};

export default App;
