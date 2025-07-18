import React, { useEffect } from "react";

const User = () => {
  const [product, setProduct] = usestate();
   useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch("");
      const data = await res.json();
       return(res)
    }
   })
  return (
    <div>
      {product.map((item)=>{
        return (
          
        )
      })}
      <h1>user1</h1>
    </div>
  );
};

export default User;
