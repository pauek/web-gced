import Image from "next/image";

export default function AlumniCard({}: {}) {
    const name: string = "Maria";
    const surname: string = "Risques";
    const generation: number = 2025;
    const internship: string = "Mango";
    const finalDegreeThesis: string = "No especificat";
    const master: string = "No especificat";
    const work: string = "Data Scientist";
    
  
    return (
    <div className="rounded-[15px] border border-[#B0DAED] bg-white overflow-clip w-80 h-[290px] flex-shrink-0">
      <div className="flex w-[275px] flex-col items-start gap-[10px]">
        <div className="flex items-center gap-[20px] p-[20px] pb-0">
            <div className="flex justify-center items-center w-[75px] h-[75px] flex-shrink-0 rounded-[90px] bg-[#B0DAED]">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M25 8.33331C27.2102 8.33331 29.3298 9.21129 30.8926 10.7741C32.4554 12.3369 33.3334 14.4565 33.3334 16.6666C33.3334 18.8768 32.4554 20.9964 30.8926 22.5592C29.3298 24.122 27.2102 25 25 25C22.7899 25 20.6703 24.122 19.1075 22.5592C17.5447 20.9964 16.6667 18.8768 16.6667 16.6666C16.6667 14.4565 17.5447 12.3369 19.1075 10.7741C20.6703 9.21129 22.7899 8.33331 25 8.33331ZM25 29.1666C34.2084 29.1666 41.6667 32.8958 41.6667 37.5V41.6666H8.33337V37.5C8.33337 32.8958 15.7917 29.1666 25 29.1666Z" fill="#1E1E1E"/>
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center gap-[9px]">
                <p className="text-black text-[14px] font-bold leading-normal">{name} {surname}</p>
                <div className="flex p-[5px] justify-center items-center gap-[10px] rounded-[90px] bg-[#B0DAED]">
                    <p className="text-black font-poppins text-[12px] font-medium leading-normal">Generació {generation}</p>
                </div>
            </div>
        </div>
        <div className="flex items-end justify-center gap-[15px] px-[30px] py-[5px]">
            <div className="flex flex-col justify-center items-start gap-[13px]">
                <div className="w-[15px] h-[15px] flex-grow justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="#009DE4">
                        <path d="M1.49997 1.64578V12.4609C1.49997 12.5907 1.61197 12.696 1.74997 12.696H4.9199C5.11881 12.696 5.30957 12.7703 5.45022 12.9026C5.59087 13.0349 5.66989 13.2143 5.66989 13.4014C5.66989 13.5884 5.59087 13.7678 5.45022 13.9001C5.30957 14.0324 5.11881 14.1067 4.9199 14.1067H1.74997C1.28585 14.1067 0.840735 13.9333 0.512553 13.6246C0.184371 13.316 0 12.8974 0 12.4609V1.64578C0 0.737309 0.783984 0 1.74997 0H10.2498C11.2158 0 11.9998 0.737309 11.9998 1.64578V8.92107C11.9998 9.10813 11.9207 9.28754 11.7801 9.41981C11.6394 9.55209 11.4487 9.6264 11.2498 9.6264C11.0509 9.6264 10.8601 9.55209 10.7195 9.41981C10.5788 9.28754 10.4998 9.10813 10.4998 8.92107V1.64578C10.4998 1.58342 10.4735 1.52362 10.4266 1.47953C10.3797 1.43544 10.3161 1.41067 10.2498 1.41067H1.74997C1.68366 1.41067 1.62008 1.43544 1.57319 1.47953C1.52631 1.52362 1.49997 1.58342 1.49997 1.64578ZM14.7737 10.6148L10.2168 14.7998C10.0753 14.9295 9.88519 15.0014 9.68766 15C9.49014 14.9986 9.30118 14.9239 9.16182 14.7923L7.21886 12.9584C7.08664 12.8245 7.01486 12.6475 7.01865 12.4648C7.02244 12.282 7.1015 12.1078 7.23917 11.9788C7.37685 11.8498 7.56239 11.7761 7.7567 11.7733C7.95101 11.7704 8.13892 11.8386 8.28084 11.9634L9.69981 13.3035L13.7257 9.60571C13.8681 9.47501 14.0599 9.40288 14.2589 9.40517C14.3574 9.40631 14.4548 9.42568 14.5453 9.46219C14.6359 9.49869 14.7179 9.55162 14.7867 9.61794C14.8555 9.68426 14.9098 9.76267 14.9464 9.84871C14.9829 9.93475 15.0012 10.0267 14.9999 10.1194C14.9987 10.212 14.9781 10.3036 14.9393 10.3887C14.9005 10.4739 14.8442 10.551 14.7737 10.6158M3.74993 3.76178H8.24984C8.44874 3.76178 8.63951 3.83609 8.78016 3.96837C8.9208 4.10065 8.99982 4.28005 8.99982 4.46712C8.99982 4.65418 8.9208 4.83359 8.78016 4.96586C8.63951 5.09814 8.44874 5.17245 8.24984 5.17245H3.74993C3.55102 5.17245 3.36026 5.09814 3.21961 4.96586C3.07896 4.83359 2.99994 4.65418 2.99994 4.46712C2.99994 4.28005 3.07896 4.10065 3.21961 3.96837C3.36026 3.83609 3.55102 3.76178 3.74993 3.76178ZM2.99994 7.28845C2.99994 7.10139 3.07896 6.92198 3.21961 6.78971C3.36026 6.65743 3.55102 6.58312 3.74993 6.58312H5.74989C5.94879 6.58312 6.13956 6.65743 6.28021 6.78971C6.42086 6.92198 6.49987 7.10139 6.49987 7.28845C6.49987 7.47552 6.42086 7.65492 6.28021 7.7872C6.13956 7.91948 5.94879 7.99379 5.74989 7.99379H3.74993C3.55102 7.99379 3.36026 7.91948 3.21961 7.7872C3.07896 7.65492 2.99994 7.47552 2.99994 7.28845Z" fill="#009DE4"/>
                    </svg>
                </div>
                <div className="w-[15px] h-[15px] flex-grow justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="#009DE4">
                        <path d="M7.5 0L0 5L2.72727 6.81667V11.8167L7.5 15L12.2727 11.8167V6.81667L13.6364 5.90833V11.6667H15V5L7.5 0ZM12.15 5L7.5 8.1L2.85 5L7.5 1.9L12.15 5ZM10.9091 10.8333L7.5 13.1L4.09091 10.8333V7.725L7.5 10L10.9091 7.725V10.8333Z" fill="#41ADDE"/>
                    </svg>
                </div>
                <div className="w-[15px] h-[15px] flex-grow justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="#009DE4">
                        <path d="M0 16H14.625M0.75 9.25V16M14.25 9.25V16M4.125 5.49999V16M10.875 5.49999V16M0 9.25H3.75M15 9.25H11.25M3.375 5.49999H11.625M7.5 5.49999V3.23649M7.5 3.23649V1.72749C7.5 1.37199 7.5 1.19424 7.6095 1.08399C7.9545 0.736739 9.375 1.55724 9.915 1.89024C10.371 2.17074 10.5 2.73174 10.5 3.23649H7.5ZM7.5 16V14.5M6.375 8.5V8.875M8.625 8.5V8.875M6.375 11.5V11.875M8.625 11.5V11.875" stroke="#41ADDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="w-[15px] h-[15px] flex-grow justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="#009DE4">
                        <path d="M1.5 15C1.0875 15 0.7345 14.8455 0.441 14.5366C0.1475 14.2276 0.0005 13.8558 0 13.4211V4.73684C0 4.30263 0.147 3.93105 0.441 3.6221C0.735 3.31316 1.088 3.15842 1.5 3.15789H4.5V1.57895C4.5 1.14474 4.647 0.773158 4.941 0.464211C5.235 0.155263 5.588 0.000526316 6 0H9C9.4125 0 9.76575 0.154737 10.0597 0.464211C10.3537 0.773684 10.5005 1.14526 10.5 1.57895V3.15789H13.5C13.9125 3.15789 14.2657 3.31263 14.5597 3.6221C14.8537 3.93158 15.0005 4.30316 15 4.73684V13.4211C15 13.8553 14.8532 14.2271 14.5597 14.5366C14.2662 14.8461 13.913 15.0005 13.5 15H1.5ZM1.5 13.4211H13.5V4.73684H1.5V13.4211ZM6 3.15789H9V1.57895H6V3.15789Z" fill="#41ADDE"/>
                    </svg>
                </div>
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
        <button type="button" className="inline-flex items-center rounded-[10] border-[1px] border-blue-500 bg-white-600 px-3 py-2 text-sm font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <svg className="-ml-0.5 mr-1.5 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Publish
        </button>
      </div>
    </div>
  );
}