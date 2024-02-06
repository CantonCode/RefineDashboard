import { IOrder } from "../../../interfaces"



export const RecentOrdersQuickView: React.FC<{sharedState: string}> = ({sharedState}) => {
    return(
        <div>
         Shared State:{sharedState}
        </div>
    )
}