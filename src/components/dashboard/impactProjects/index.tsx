import { useState } from "react";
import { ImpactProjectCard } from "./impactProjectCard/impactProjectCard";
import { Col, Row } from "antd";




export const ImpactProjects: React.FC = () => {
    
    return(
        <div style={{width:'100%',height:'20vh'}}>
            <Row gutter={[16, 16]} style={{width:'100%',height:'30vh'}}>
                <Col  xl={8} lg={12} md={24} sm={24} xs={24}>
                    <ImpactProjectCard></ImpactProjectCard>
                </Col>
                <Col  xl={8} lg={12} md={24} sm={24} xs={24}>
                    <ImpactProjectCard></ImpactProjectCard>
                </Col>
                <Col  xl={8} lg={12} md={24} sm={24} xs={24}>
                    <ImpactProjectCard></ImpactProjectCard>
                </Col>
            </Row>
        </div>
        )
}