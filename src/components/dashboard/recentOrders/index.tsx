import { useState } from "react";
import { IOrder } from "../../../interfaces"
import { RecentOrdersTable } from "../recentOrdersTable";
import { RecentOrdersQuickView } from "../recentOrdersQuickView";
import { Col } from "antd";



export const RecentOrders: React.FC = () => {
    const [sharedState, setSharedState] = useState('initial value');

    return(
        <div>
            <Col xl={12} lg={24} md={24}>
            <RecentOrdersTable sharedState={sharedState} setSharedState={setSharedState}/>  
            </Col>
            <RecentOrdersQuickView sharedState={sharedState}/>
        </div>
        )
}