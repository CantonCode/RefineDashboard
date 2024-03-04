import { useState } from "react";
import { IOrder } from "../../../interfaces"
import { RecentOrdersTable } from "../recentOrdersTable";
import { RecentOrdersQuickView } from "../recentOrdersQuickView";
import { Card, Col, Row } from "antd";
import { Map } from "react-map-gl";
import { MetricDataCard } from "./testDataCard";
import { useList } from "@refinedev/core";



export const Metrics: React.FC = () => {
    const { data } = useList({
        resource: "dashboard_data",
        dataProviderName: "jsonapi",
        filters: [{ field: "userID", operator: "eq", value: "3" }],
    });
    const metrics = data?.data[0].metrics;

   
    return (
        <Row gutter={[16, 16]}>
            
            {metrics?.map((metric:any, i:any) => (
                <Col key={i} xl={8} lg={12} md={24} sm={24} xs={24}>
                    <MetricDataCard {...metric} />
                </Col>
            ))}
        </Row>
    )
}