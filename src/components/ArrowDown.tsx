import React, { memo } from "react";

const ArrowDown = memo(
  ({ color = "#fff", size = 24 }: { color?: string; size?: number }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    );
  }
);

export default ArrowDown;
