import { Label } from "@/components/ui/label"

export function CommonLable(props) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label className="font-normal text-xs leading-[20px] text-[#1e1e1e] mb-2" htmlFor={props.htmlFor}>{props.lableText}</Label>
      </div>
    </div>
  )
}
