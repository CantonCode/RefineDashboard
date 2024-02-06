import { PropsWithChildren, createContext, useReducer } from "react";
import { IOrder } from "../interfaces";






// import { PropsWithChildren, createContext, useReducer } from "react";
// import { IOrder } from "../interfaces";

// export const OrderContext = createContext<{
//     orders: IOrder[];
//     dispatch: Function;
// }>({orders:[],dispatch:()=>null});

// const initialOrder: IOrder[] = [];

// const orderReducer = (    
//     state: IOrder[],
//     action:{
//         payload:IOrder,
//         type:string;
//     },
// ): IOrder[] => {
//     switch(action.type){
//         case "updateSelected":
//             return [{...action.payload}];
//         default:
//             return [];
//     }
// };

// export const OrderContextProvider:React.FC<PropsWithChildren>=({
//     children,
// }) => {
//     const [orders,dispatch] = useReducer(orderReducer,initialOrder);
    
//     console.log(orders)
    
//     return(
//         <OrderContext.Provider
//             value={{
//                 orders,
//                 dispatch
//             }}
//             >
//             </OrderContext.Provider>
//     );
// }


