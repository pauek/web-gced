import { useState } from "react";
import { alumniData } from "./fake_data";
import AlumniCard from "@/components/alumni_card/AlumniCard";

export default function OldAlumniCarousel() {
  const [visibleIndex /*, _setVisibleIndex*/] = useState(2);

  return (
    <div className="flex gap-[35px] justify-center items-center">
      {alumniData.map((alumni, index) => {
        const isCenterGroup =
          index === visibleIndex ||
          index === visibleIndex + 1 ||
          index === visibleIndex - 1;

        return (
          <div
            key={index}
            className={`snap-center flex-shrink-0 transition-transform duration-300 w-[320px] ${
              isCenterGroup
                ? "opacity-100 translate-y-0 scale-105"
                : "opacity-30 translate-y-6 scale-95"
            }`}
          >
            <AlumniCard
              firstName={alumni.name}
              lastName={alumni.surname}
              generation={alumni.generation}
              // internship={alumni.internship}
              // finalDegreeThesis={alumni.finalDegreeThesis}
              masters={[{ name: alumni.master }]}
              // work={alumni.work}
			  linkedInURL=""
			  id={9999}
			  review=""
			  tfgDescription=""
			  tfgTitle=""
            />
          </div>
        );
      })}
    </div>
  );
}
