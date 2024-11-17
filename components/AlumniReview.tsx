interface AlumniCardProps {
    name: string;
    surname: string;
    generation: number;
    description: string;
  }
  
  export default function AlumniReview({
    name,
    surname,
    generation,
    description,
  }: AlumniCardProps) {
    return (
      <div className="border border-[#B0DAED] bg-white overflow-hidden w-[590px] h-[228px] flex-shrink-0 flex flex-col p-[15px] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px]">
        
        <div className="flex items-start gap-[15px]">
          <div className="flex flex-col">
            <p className="text-black text-[18px] font-bold leading-normal">
              {name} {surname}
            </p>
            <div className="flex justify-center items-center bg-[#B0DAED] rounded-full px-4 py-1">
              <p className="text-[12px] font-medium text-black">Generación {generation}</p>
            </div>
          </div>
        </div>
  
        <div className="flex mt-4 gap-[15px]">
          <p className="text-[12px] text-black font-normal leading-normal">
            {description}
          </p>
        </div>
      </div>
    );
  }
  