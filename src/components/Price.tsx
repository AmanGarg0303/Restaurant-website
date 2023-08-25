"use client";
import { ProductType } from "@/types/types";
import React, { useEffect, useState } from "react";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">&#8377;{total}</h2>
      {/* options container  */}

      <div className="flex gap-4">
        {product.options?.length
          ? product.options?.map((option, idx) => (
              <button
                key={option.title}
                className="p-2 ring-1 ring-red-400 rounded-md min-w-[6rem]"
                style={{
                  background: selected === idx ? "rgb(248 113 113)" : "white",
                  color: selected === idx ? "white" : "rgb(239 68 68)",
                }}
                onClick={() => setSelected(idx)}
              >
                {option.title}
              </button>
            ))
          : ""}
      </div>

      {/* quantity and add button container  */}

      <div className="flex justify-between items-center">
        {/* Quantity  */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="space-x-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              &lt;
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Cart button  */}
        <button className="w-56 uppercase bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
