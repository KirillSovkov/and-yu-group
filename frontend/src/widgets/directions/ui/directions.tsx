import { StageWorkItemsI } from "../model"

import { Button } from "../../../shared/ui/button";
import useModalStore from "../../../shared/lib/modal-store";


const stageWorkItems: StageWorkItemsI[] = [
  {
    name: "Сантехника",
    img: "/images/stages-work-imgs/bathroom.jpg",
  },
  {
    name: "Керамогранит и плитка",
    img: "/images/stages-work-imgs/shower.jpg",
  },
  {
    name: "Напольные покрытия",
    img: "/images/stages-work-imgs/room.jpg",
  },
  {
    name: "Двери и перегородки",
    img: "/images/stages-work-imgs/door.jpg",
  },
  {
    name: "Светильники, розетки и выключатели",
    img: "/images/stages-work-imgs/power-socket.jpg",
  },
  {
    name: "Системы вентиляции, кондиционирования и отопления",
    img: "/images/stages-work-imgs/conditioner.jpg",
  },
  {
    name: "Обои, краска, лепнина",
    img: "/images/stages-work-imgs/wall.jpg",
  },
  {
    name: "Корпусная и мягкая мебель Бытовая техника",
    img: "/images/stages-work-imgs/sofa.jpg",
  },
]

export function DirectionsSection() {

  const { openModal } = useModalStore();

  return (
    <section id="directions" className="scroll-mt-24">
      <div className="flex flex-col items-center justify-center px-4 py-10 md:px-11 gap-9">
        <h1 className="text-2xl font-medium text-black underline md:text-4xl">
          Наши направления
        </h1>
        <div className="grid grid-cols-1 gap-2 grid-rows-8 md:grid-rows-4 md:grid-cols-2 lg:w-4/6 md:w-full">
          {stageWorkItems.map((item, index) => (
            <div key={index} className="relative">
              <img src={item.img} alt="image" />
              <span className="absolute text-white bottom-2 left-2 lg:bottom-6 lg:left-6 lg:right-6 lg:text-xl">{item.name}</span>
            </div>
          ))}
        </div>
        <Button
          children={"Обсудить проект"}
          onPressHandle={openModal}
        />
      </div>
    </section>
  )
}