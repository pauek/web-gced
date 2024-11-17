interface InfoCardLineProps {
    title: string;
    description: string;
}

export default function InfoCardLine({
    title,
    description
}: InfoCardLineProps) {
  return (
    <p className="self-stretch text-black text-[12px] font-normal leading-normal">
        <span className="font-bold">{title}:</span> {description}
    </p>
  );
}
