import React from "react";
import ItemCount from "./ItemCount";
export const ItemDetail = ({ data }) => {
   return (
      <ul>
         <>
            {data?.img}
            <p>$ {data?.precio}</p>
            <ItemCount stock={data?.stock} initial={1} />
         </>
      </ul>
   );
};