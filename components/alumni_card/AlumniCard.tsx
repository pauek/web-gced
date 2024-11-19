import CurrentJobIcon from "@/components/icons/CurrentJobIcon";
import InternshipIcon from "@/components/icons/InternshipIcon";
import MasterIcon from "@/components/icons/MasterIcon";
import TfgIcon from "@/components/icons/TfgIcon";
import GcedButton from "@/components/GcedButton";
import AlumniTopPart from "@/components/alumni_card/AlumniTopPart";
import InfoCardLine from "@/components/alumni_card/InfoCardLine";
import { InfoIcon } from "../icons/InfoIcon";
import { alumniData } from "@/app/page";

type AlumniCardProps = (typeof alumniData)[0];

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
    <div className="rounded-[15px] border border-[#B0DAED] bg-white overflow-hidden h-[290px]">
      <div className="flex flex-col items-start gap-[0.4em]">
        <AlumniTopPart name={name} surname={surname} generation={generation} />
        <div className="flex flex-col justify-center items-start">
          <InfoCardLine
            icon={<InternshipIcon />}
            title="Pràctiques"
            description={internship}
          />
          <InfoCardLine
            icon={<TfgIcon />}
            title="TFG"
            description={finalDegreeThesis}
          />
          <InfoCardLine
            icon={<MasterIcon />}
            title="Màster"
            description={master}
          />

          <InfoCardLine
            icon={<CurrentJobIcon />}
            title="Treball Actiu"
            description={work}
          />
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
