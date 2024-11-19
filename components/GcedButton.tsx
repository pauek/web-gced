import { cn } from "@/lib/utils";
import { InfoIcon } from "./icons/InfoIcon";

interface GcedButtonProps {
  children: React.ReactNode;
}
export default function GcedButton({ children }: GcedButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center w-[250px] rounded-[10px] border-[1px]",
        "border-[#009DE4] bg-white-600 px-3 py-2 text-sm font-semibold",
        " text-[#009DE4] hover:text-white hover:bg-[#009DE4]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-[#009DE4]"
      )}
    >
      <div className="flex w-full justify-center items-center gap-[8px]">
        {children}
      </div>
    </button>
  );
}
