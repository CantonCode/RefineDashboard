import { PropsWithChildren, createContext, useReducer } from "react";
import { IOrder } from "../interfaces";

export const OrderContext = createContext<{
    order: string | ""
    dispatch: Function;
}>({order:"",dispatch:()=>null});

const orderReducer = (
    state:string,
    action:{
        payload:IOrder,
        type:string;
    },
) => {
    switch(action.type){
        case "setOrder":
            return action.payload.createdAt;
        default:
            return '';
}
};


export const OrderContextProvider:React.FC<PropsWithChildren>=({
        children,
    }) => {
        console.log("in provider")
        const [order,dispatch] = useReducer(orderReducer,"");
    
            console.log(order)
            
            return(
                <OrderContext.Provider
                    value={{
                        order,
                        dispatch
                    }}
                    >
                    </OrderContext.Provider>
            );

}


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


