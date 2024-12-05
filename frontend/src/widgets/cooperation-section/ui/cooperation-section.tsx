import { useState } from "react";

import { PartnerModal } from "../../../features/partner-modal";
import { Button } from "../../../shared/ui/button";

export function CooperationSection() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModalHandle = () => {
    setIsModalOpen(!isModalOpen)
  }


  return(
    <section id="cooperation" className="scroll-mt-24 bg-white">
     <div className="flex flex-col items-center gap-4 md:flex-row">
      <div className="w-full md:w-2/5 bg-[url('/images/space.jpg')] h-[200px] md:h-[485px] bg-cover bg-[center_bottom_-20px]"></div>
      <div className="flex flex-col items-center justify-between gap-6 px-4 py-4 md:py-10 md:w-[550px] min-h-full">
        <h1 className="relative text-2xl font-medium text-black md:text-4xl before:content-['_'] before:absolute before:-bottom-2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:w-1/2 before:h-[1px] before:bg-black">
          Сотрудничество
        </h1>
        <span className="text-lg font-medium text-center md:text-2xl lg:text-left">
          Мы предлагаем индивидуальные взаимовыгодные условия сотрудничества для наших партнеров
        </span>
        <span className="text-lg font-normal text-center lg:text-left md:text-xl">
          Оставьте заявку и мы свяжемся с вами в ближайшее время
        </span>
        <Button children={"Стать партнером"} onPressHandle={toggleModalHandle}  />
      </div>
      </div>
      <PartnerModal isModalOpen={isModalOpen} toggleModalHandle={toggleModalHandle} />
    </section>
  )
}