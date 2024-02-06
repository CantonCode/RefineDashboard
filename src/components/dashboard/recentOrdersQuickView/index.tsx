import Card from "antd/es/card/Card"
import { IOrder } from "../../../interfaces"



export const RecentOrdersQuickView: React.FC<{sharedState: IOrder}> = ({sharedState}) => {
    return(
        <Card>
             Shared State:{sharedState?.id}
        </Card>
    )
}