import { useState } from "react";
import { ImpactProjectCard } from "./impactProjectCard/impactProjectCard";
import { Col, Row } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import { useList } from "@refinedev/core";






export const ImpactProjects: React.FC = () => {

    const { data } = useList({
        resource: "dashboard_data",
        dataProviderName: "jsonapi",
        filters: [{ field: "userID", operator: "eq", value: "3" }],
    });
    let projects = []
    projects = data?.data[0].projects;
    console.log(projects)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    if(projects){
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
    
                
                <div style={{ width: "85%" }}>
                    <Carousel
                        containerClass="carousel-1"
                        showDots={false}
                        responsive={responsive}
                        draggable={false}
                    >  
                        
                        {projects?.map((project:any) => (
                        <ImpactProjectCard {...project}></ImpactProjectCard>
                ))}
    
                        
                    </Carousel>
                </div>
            </div>
    
        )
    }
    else{
        return null
    }

    
}