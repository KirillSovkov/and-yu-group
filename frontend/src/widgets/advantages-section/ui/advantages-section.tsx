import { Card } from "@nextui-org/react";

const advantages = [
  {
    image: '/images/advantages/room.jpg',
    title: null,
    description: null,
  },
  {
    image: "/logo/logo.svg",
    title: null,
    description: null,
  },
  {
    image: null,
    title: "Экономия вашего времени",
    description: "Мы берем на себя все вопросы по комплектации, поставке материалов и операционным задачам.",
  },
  {
    image: null,
    title: "Контроль доставок и бюджета. Ничего не потеряется.",
    description: "Все проблемы с поставками мы решаем сами, контролируем график и следим за соблюдением бюджета заказчика.",
  },
  {
    image: '/images/advantages/sofa.jpg',
    title: null,
    description: null,
  },
  {
    image: null,
    title: "Полная ответственность",
    description: "Финансовая защита: мы покрываем расходы на повреждение, замену или порчу товара. Работая с нами, вы можете быть уверены в страховании ваших грузов.",
  },
  {
    image: null,
    title: "Надежность и порядочность",
    description: "Нас рекомендуют ведущие профессионалы отрасли, включая известных дизайнеров и архитектурные бюро. Сотрудничество с нами гарантирует надежность и спокойствие.",
  },
  {
    image: null,
    title: "Экспертность. Вам не надо во всем разбираться",
    description: "Мы ежедневно комплектуем материалы и предоставляем оптимальные решения. С широким портфелем поставщиков и высоким уровнем экспертизы мы гарантируем качество.",
  },
  {
    image: '/images/advantages/bathroom.jpg',
    title: null,
    description: null,
  },
];

export function AdvantagesSection() {

  
  return (
    <section id="advantages" className="scroll-mt-24">
      <div className="flex flex-col items-center justify-center px-4 py-10 text-center md:px-11 gap-9">
        <h1 className="text-2xl font-medium text-black underline md:text-4xl">
          Наши преимущества для вас
        </h1>
        <div className="grid grid-cols-1 gap-6 grid-rows-9 sm:grid-rows-4 sm:grid-cols-2 md:grid-rows-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:w-4/6 md:w-full">
          {advantages.map((advantage, index) => (
            <Card key={index} className="flex items-center justify-center rounded-none group felx-col lg:last:block sm:last:hidden">
              {advantage.image ? (
                <img src={advantage.image} alt="image" className="object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-center">
                  <p className="absolute p-3 text-lg transition-opacity duration-300 ease-in-out select-none group-hover:opacity-0">{advantage.title}</p>
                  <span className="absolute p-3 text-base transition-opacity duration-300 ease-in-out opacity-0 select-none lg:text-xs group-hover:opacity-100">{advantage.description}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}