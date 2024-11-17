import CurrentJobIcon from "@/components/icons/CurrentJobIcon";
import InformationIcon from "@/components/icons/InformationIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import InternshipIcon from "@/components/icons/InternshipIcon";
import MasterIcon from "@/components/icons/MasterIcon";
import TfgIcon from "@/components/icons/TfgIcon";

import GcedButton from "@/components/GcedButton";

import AlumniTopPart from "@/components/alumni_card/AlumniTopPart";
import InfoCardLine from "@/components/alumni_card/InfoCardLine";

interface AlumniCardProps {
  name: string;
  surname: string;
  generation: number;
  internship: string;
  finalDegreeThesis: string;
  master: string;
  work: string; 
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
        <AlumniTopPart name={name} surname={surname} generation={generation}/>
        <div className="flex items-end justify-center gap-[15px] px-[30px] py-[5px]">
          <div className="flex flex-col justify-center items-start gap-[13px]">
            <InternshipIcon />
            <TfgIcon />
            <MasterIcon />
            <CurrentJobIcon />
          </div>
          <div className="flex flex-col justify-center items-start gap-[10px]">
            <InfoCardLine title="Pràctiques" description={internship}/>
            <InfoCardLine title="TFG" description={finalDegreeThesis}/>
            <InfoCardLine title="Màster" description={master}/>
            <InfoCardLine title="Treball Actiu" description={work}/>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center mt-[10px]">
        <GcedButton text="Més informació"/>
      </div>
    </div>
  );
}
