import CurrentJobIcon from "@/components/icons/CurrentJobIcon";
import InternshipIcon from "@/components/icons/InternshipIcon";
import MasterIcon from "@/components/icons/MasterIcon";
import TfgIcon from "@/components/icons/TfgIcon";
import GcedButton from "@/components/GcedButton";
import AlumniTopPart from "@/components/alumni_card/AlumniTopPart";
import InfoCardLine from "@/components/alumni_card/InfoCardLine";
import { InfoIcon } from "../icons/InfoIcon";

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
        <AlumniTopPart name={name} surname={surname} generation={generation} />
        <div className="flex flex-col justify-center items-start">
          <div className="flex items-end justify-center gap-[15px] px-[30px] py-[5px]">
            <InternshipIcon />
            <InfoCardLine title="Pràctiques" description={internship} />
          </div>
          <div className="flex items-end justify-center gap-[15px] px-[30px] py-[5px]">
            <TfgIcon />
            <InfoCardLine title="TFG" description={finalDegreeThesis} />
          </div>
          <div className="flex items-end justify-center gap-[15px] px-[30px] py-[5px]">
            <MasterIcon />
            <InfoCardLine title="Màster" description={master} />
          </div>
          <div className="flex items-end justify-center gap-[15px] px-[30px] py-[5px]">
            <CurrentJobIcon />
            <InfoCardLine title="Treball Actiu" description={work} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center mt-[10px]">
        <GcedButton>
          <InfoIcon className="text-lg" />
          Més informació
        </GcedButton>
      </div>
    </div>
  );
}
