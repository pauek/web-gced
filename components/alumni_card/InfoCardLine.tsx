interface InfoCardLineProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function InfoCardLine({
  icon,
  title,
  description,
}: InfoCardLineProps) {
  return (
    <div className="flex items-end justify-center gap-[15px] px-[30px] py-[5px]">
      {icon}
      <p className="self-stretch text-black text-[12px] font-normal leading-normal">
        <span className="font-bold">{title}:</span> {description}
      </p>
    </div>
  );
}
