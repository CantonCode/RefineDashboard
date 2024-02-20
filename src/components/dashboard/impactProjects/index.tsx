import { useState } from "react";
import { ImpactProjectCard } from "./impactProjectCard/impactProjectCard";




export const ImpactProjects: React.FC = () => {
    
    return(
        <div>
            This is the imapact Projects page

            impact cards

            <ImpactProjectCard></ImpactProjectCard>
            <ImpactProjectCard></ImpactProjectCard>
        </div>
        )
}