import { useState } from "react";
import { IOrder } from "../../../interfaces"
import { RecentOrdersTable } from "../recentOrdersTable";
import { RecentOrdersQuickView } from "../recentOrdersQuickView";
import { Col, Row } from "antd";



export const RecentOrders: React.FC = () => {
    const [sharedState, setSharedState] = useState<IOrder>();

    return(
        <Row gutter={[16, 16]}>
            <Col xl={12} lg={24} md={24}>
                <RecentOrdersTable sharedState={sharedState} setSharedState={setSharedState}/>  
            </Col>

            <Col xl={12} lg={24} md={24}>
                <RecentOrdersQuickView sharedState={sharedState}/>
            </Col>
        </Row>
        )
}