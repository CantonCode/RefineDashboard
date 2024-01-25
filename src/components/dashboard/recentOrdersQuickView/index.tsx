import { useOrderContext } from "../../../hooks/useOrderContext";
import { IOrder } from "../../../interfaces"



export const RecentOrdersQuickView: React.FC = () => {
    const { order } = useOrderContext();
    return(
        <div>
            {order?.id}
        </div>
    )
}