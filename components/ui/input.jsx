import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        " w-full rounded-[14px] bg-[#171717] px-[18px] py-[11px] text-sm text-[#E1E1E1] file:text-sm file:font-medium placeholder:text-gray-500",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
