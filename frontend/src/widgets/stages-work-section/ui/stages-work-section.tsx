import { StagesWorkI } from "../model";

import { Button } from "../../../shared/ui/button";

import { CaretRight } from "@phosphor-icons/react";
import useModalStore from "../../../shared/lib/modal-store";

const stages: StagesWorkI[] = [
  {
    title: "1. Заключение договора",
    description: "Вы отправляете нам папку с чертежами и визуализациями. После обсуждения условий мы заключаем договор на комплектацию.",
  },
  {
    title: "2. Составление спецификации",
    description: "Мы готовим спецификацию с указанием цен и сроков.",
  },
  {
    title: "3. Согласование материалов",
    description: "Наши менеджеры помогут вам подобрать все материалы онлайн, также возможен выезд в шоурумы наших партнеров.",
  },
  {
    title: "4. Закупка материалов",
    description: "У нас заключено более 500 дилерских и дистрибьюторских договоров с поставщиками на все категории товаров.",
  },
  {
    title: "5. Доставка материалов",
    description: "Мы привозим материалы только в нужный момент, а до этого храним их на нашем складе. Также мы контролируем соблюдение графика поставок.",
  },
  {
    title: "6. Гарантии и рекламации",
    description: "Мы сопровождаем и поддерживаем вас по вопросам гарантий и рекламаций. Проблемы с повреждением или браком товара решаем самостоятельно.",
  },
];

export function StageWorkSection() {
  const firstColumn = stages.slice(0, 3);
  const secondColumn = stages.slice(3);

  const { openModal } = useModalStore();

  return (
    <section id="stagesWork" className="scroll-mt-24">
      <div className="flex flex-col items-center justify-center py-10 bg-foreground-100 px-11 gap-9">
        <h1 className="text-2xl font-medium text-black underline md:text-4xl">
          Этапы работы
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-4/6 md:w-full">
          <div className="flex flex-col gap-6">
            {firstColumn.map((stage, index) => (
              <div key={index} className="relative flex w-11/12 gap-5">
                <div className="bg-[#007C53] w-fit h-fit p-2">
                  <CaretRight size={22} color="white" />
                  {index < firstColumn.length - 1 && (
                    <div className="absolute bottom-0 left-5 transform -translate-x-1/2 w-px bg-[#007C53]" style={{ height: 'calc(100% - 4rem)' }}></div>
                  )}
                  {index < stages.length - 1 && (
                    <div className="absolute bottom-0 left-5 transform -translate-x-1/2 w-px bg-[#007C53] md:hidden" style={{ height: 'calc(100% - 4rem)' }}></div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium">{stage.title}</p>
                  <span className="text-base font-light md:min-h-24">{stage.description}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {secondColumn.map((stage, index) => (
              <div key={index} className="relative flex w-11/12 gap-5">
                <div className="bg-[#007C53] w-fit h-fit p-2">
                  <CaretRight size={22} color="white" />
                  {index < secondColumn.length - 1 && (
                    <div className="absolute bottom-0 left-5 transform -translate-x-1/2 w-px bg-[#007C53]" style={{ height: 'calc(100% - 4rem)' }}></div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium">{stage.title}</p>
                  <span className="text-base font-light md:min-h-24">{stage.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button 
          children={"Обсудить проект"} 
          onPressHandle={openModal} 
        />
      </div>
    </section>
  );
}