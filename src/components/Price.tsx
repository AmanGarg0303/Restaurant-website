"use client";
import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">&#8377;{total.toFixed(2)}</h2>
      {/* options container  */}

      <div className="flex gap-4">
        {options?.map((option, idx) => (
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
        ))}
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
