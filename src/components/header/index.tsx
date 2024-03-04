import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import {
    Avatar,
    Layout as AntdLayout,
    Space,
    Switch,
    theme,
    Typography,
} from "antd";
import React, { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode";

const { Text } = Typography;
const { useToken } = theme;

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
    sticky,
}) => {
    const { token } = useToken();
    const { data: user } = useGetIdentity<any>();
    const localuser = JSON.parse(localStorage.getItem("user"));
    console.log(localuser)
    const { mode, setMode } = useContext(ColorModeContext);

    const headerStyles: React.CSSProperties = {
        backgroundColor: "#f5f5f5" ,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "",
        
    };

    if (sticky) {
        headerStyles.position = "sticky";
        headerStyles.top = 0;
        headerStyles.zIndex = 1;
    }

    return (
        <AntdLayout.Header style={headerStyles}>
            <Space>
                {/* <Switch
                    checkedChildren="🌛"
                    unCheckedChildren="🔆"
                    onChange={() =>
                        setMode(mode === "light" ? "dark" : "light")
                    }
                    defaultChecked={mode === "dark"}
                /> */}
                <Space style={{ marginLeft: "8px" }} size="middle">
                   {"Welcome "+ localuser?.name+"!"}
                </Space>
            </Space>
        </AntdLayout.Header>
    );
};
