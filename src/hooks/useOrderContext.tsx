import { useContext } from "react";

import { OrderContext } from "../context";

export const useOrderContext = () => {
    const order = useContext(OrderContext);
    return order;
}