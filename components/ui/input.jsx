import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, placeholder, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          " w-full rounded-[14px] bg-[#171717] px-[18px] py-[11px] text-sm text-[#E1E1E1] file:text-sm file:font-medium placeholder:text-[#E1E1E1] outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
