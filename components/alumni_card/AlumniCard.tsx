import GcedButton from "@/components/GcedButton";
import AlumniTopPart from "@/components/alumni_card/AlumniTopPart";
import InfoCardLine from "@/components/alumni_card/InfoCardLine";
import MasterIcon from "@/components/icons/MasterIcon";
import { AlumniCardInfo } from "@/lib/db/alumni";
import { InfoIcon } from "../icons/InfoIcon";

export default function AlumniCard({
  firstName,
  lastName,
  generation,
  // internship,
  // finalDegreeThesis,
  masters,
  // work,
}: AlumniCardInfo) {
  return (
    <div className="rounded-[15px] border border-[#B0DAED] bg-white overflow-hidden h-[290px]">
      <div className="flex flex-col items-start gap-[0.4em]">
        <AlumniTopPart name={firstName} surname={lastName} generation={generation} />
        <div className="flex flex-col justify-center items-start">
          {/* <InfoCardLine
            icon={<InternshipIcon />}
            title="Pràctiques"
            description={internship}
          /> */}
          {/* <InfoCardLine
            icon={<TfgIcon />}
            title="TFG"
            description={finalDegreeThesis}
          /> */}
		  {}
          <InfoCardLine
            icon={<MasterIcon />}
            title="Màster"
            description={masters[0].name}
          />

          {/* <InfoCardLine
            icon={<CurrentJobIcon />}
            title="Treball Actiu"
            description={work}
          /> */}
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
