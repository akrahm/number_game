"use client";

import Image from "next/image";
import { useState } from "react";

  export default function Home() {
    function modifyNumber(inputNumber: any) {
      if (typeof Number(inputNumber) !== "number") {
        throw new Error("Input must be a number");
      }
  
      let increased = inputNumber + 4;
      let decreased = inputNumber - 4;
  
      // If the number has three digits, take only the last two digits
      increased = increased >= 100 ? increased % 100 : increased;
      decreased = decreased >= 100 ? decreased % 100 : decreased;
  
      let swapIncreased = parseInt(
        increased.toString().split("").reverse().join("")
      );
      let swapDecreased = parseInt(
        decreased.toString().split("").reverse().join("")
      );
  
      let swapIncreasedArr = [
        swapIncreased + 1,
        swapIncreased + 2,
        swapIncreased + 3,
        swapIncreased + 4,
        swapIncreased + 5,
        swapIncreased - 1,
        swapIncreased - 2,
        swapIncreased - 3,
        swapIncreased - 4,
        swapIncreased - 5,
      ];
  
      let swapDecreasedArr = [
        swapDecreased + 1,
        swapDecreased + 2,
        swapDecreased + 3,
        swapDecreased + 4,
        swapDecreased + 5,
        swapDecreased - 1,
        swapDecreased - 2,
        swapDecreased - 3,
        swapDecreased - 4,
        swapDecreased - 5,
      ];
  
      return {
        increased,
        decreased,
        swapIncreased,
        swapDecreased,
        swapIncreasedArr,
        swapDecreasedArr,
      };
    }
  
    const [number, setNumber] = useState(0);
    const result = modifyNumber(number);
  
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-bold">Number Modifier</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          className="border p-2 rounded"
        />
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p>
            <strong>Increased:</strong>{" "}
            {number ? `${result.increased} // added 4 from input` : "" + "///4"}
          </p>
          <p>
            <strong>Decreased:</strong>{" "}
            {number ? `${result.decreased} // subtracted 4 from input` : +"///4"}
          </p>
          <p>
            <strong>Swap Increased:</strong> {number ? result.swapIncreased : ""}
          </p>
          <p>
            <strong>Swap Decreased:</strong> {number ? result.swapDecreased : ""}
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Swap Increased Array</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {number &&
                result.swapIncreasedArr.map((num, index) => (
                  <div
                    key={index}
                    className="p-2 bg-blue-400 text-white rounded shadow w-12 text-center"
                  >
                    {num}
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Swap Decreased Array</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {number &&
                result.swapDecreasedArr.map((num, index) => (
                  <div
                    key={index}
                    className="p-2 bg-green-400 text-white rounded shadow w-12 text-center"
                  >
                    {num}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
