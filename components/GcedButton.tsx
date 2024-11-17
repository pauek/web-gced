import InformationIcon from '@/components/icons/InformationIcon';

interface GcedButtonProps {
    text: string,
}

export default function GcedButton({
    text
}: GcedButtonProps) {
  return (
    <button
        type="button"
        className="inline-flex items-center w-[250px] rounded-[10px] border-[1px] border-[#009DE4] bg-white-600 px-3 py-2 text-sm font-semibold text-[#009DE4] hover:text-white hover:bg-[#009DE4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009DE4]"
    >
        <div className="flex w-full justify-center items-center gap-[8px]">
            <InformationIcon />
            {text}
        </div>
    </button>
  );
}