import CurrentJobIcon from "@/components/icons/CurrentJobIcon";
import InformationIcon from "@/components/icons/InformationIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import InternshipIcon from "@/components/icons/InternshipIcon";
import MasterIcon from "@/components/icons/MasterIcon";
import TfgIcon from "@/components/icons/TfgIcon";

interface AlumniCardProps {
    name: string;
    surname: string;
    generation: number;
    internship: string;
    finalDegreeThesis?: string;
    master?: string;
    work?: string; 
}
  
export default function AlumniCard({
    name,
    surname,
    generation,
    internship,
    finalDegreeThesis,
    master,
    work,
}: AlumniCardProps) {
  return (
    <div className="rounded-[15px] border border-[#B0DAED] bg-white overflow-hidden w-80 h-[290px] flex-shrink-0">
      <div className="flex w-[275px] flex-col items-start gap-[10px]">
        <div className="flex items-center gap-[20px] p-[20px] pb-0">
          <PersonIcon />
          <div className="flex flex-col justify-center items-center gap-[9px]">
            <p className="text-black text-[14px] font-bold leading-normal">
              {name}{surname}
            </p>
            <div className="flex p-[5px] justify-center items-center gap-[10px] rounded-[90px] bg-[#B0DAED]">
              <p className="text-black font-poppins text-[12px] font-medium leading-normal">
                Generació {generation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center gap-[15px] px-[30px] py-[5px]">
          <div className="flex flex-col justify-center items-start gap-[13px]">
            <InternshipIcon />
            <TfgIcon />
            <MasterIcon />
            <CurrentJobIcon />
          </div>
          <div className="flex flex-col justify-center items-start gap-[10px]">
            <p className="self-stretch text-black text-[12px] font-normal leading-normal">
              <span className="font-bold">Pràctiques:</span> {internship}
            </p>
            <p className="self-stretch text-black text-[12px] font-normal leading-normal">
              <span className="font-bold">TFG:</span> {finalDegreeThesis}
            </p>
            <p className="self-stretch text-black text-[12px] font-normal leading-normal">
              <span className="font-bold">Màster:</span> {master}
            </p>
            <p className="self-stretch text-black text-[12px] font-normal leading-normal">
              <span className="font-bold">Treball Actual:</span> {work}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center mt-[10px]">
        <button
          type="button"
          className="inline-flex items-center w-[250px] rounded-[10px] border-[1px] border-[#009DE4] bg-white-600 px-3 py-2 text-sm font-semibold text-[#009DE4] hover:text-white hover:bg-[#009DE4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009DE4]"
        >
          <div className="flex w-full justify-center items-center gap-[8px]">
            <InformationIcon />
            Més informació
          </div>
        </button>
      </div>
    </div>
  );
}
