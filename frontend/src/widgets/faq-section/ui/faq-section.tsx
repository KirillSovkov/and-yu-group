import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaqItemI } from "../model";

import { Button } from "../../../shared/ui/button";
import useModalStore from "../../../shared/lib/modal-store";

const faqList: FaqItemI[] = [
  {
    key: 1,
    title: "Сколько стоит ваша услуга?",
    content: "Наша услуга стоит 500 руб/м²"
  },
  {
    key: 2,
    title: "Берете ли вы на частичную комплектацию?",
    content: "Да, берем. Условия обсуждаем индивидуально"
  },
  {
    key: 3,
    title: "С какими бюджетами вы работаете?",
    content: "У нас нет ограничений, мы работаем с любым бюджетом которым располагает наш клиент, от эконом до премиум сегмента"
  },
  {
    key: 4,
    title: "Если материал испортили при доставке? Например разбили ванну?",
    content: "Мы несем полную ответственность до момента доставки материалов на объект"
  },
  {
    key: 5,
    title: "Я дизайнер. Как вы сотрудничаете?",
    content: "Дизайнеры — это наши партнеры. Для дизайнеров мы предоставляем особые условия индивидуально. Если вы дизайнер, свяжитесь с нами"
  },
  {
    key: 6,
    title: "А если мне не понравятся ваши цены?",
    content: "Мы гарантируем в спецификации честные рекомендованные розничные цены. Никаких наценок. При большом объеме предоставим скидку"
  },
  {
    key: 7,
    title: "Если у меня нет дизайн проекта, могу ли я с вами работать?",
    content: "Если вы делаете ремонт без дизайн проекта, то нам от вас понадобятся только размеры помещений и ваши пожелания. Наши специалисты займутся подбором материалов для вашего интерьера"
  },
  {
    key: 8,
    title: "Сколько вариантов будет в спецификации?",
    content: "Мы стараемся предлагать от 2-х вариантов в разном ценовом сегменте. Чтобы была возможность выбора"
  },
]

export function FaqSection() {

  const { openModal } = useModalStore();

  return (
    <section>
      <div className="flex flex-col items-center justify-center py-10 px-11 gap-9 bg-foreground-100">
        <h1 className="text-2xl font-medium text-center text-black underline lg:text-left md:text-4xl">
          Ответы на часто задаваемые вопросы
        </h1>
        <div className="lg:w-4/6 md:w-full">

          <Accordion>
            {faqList.map((item) => (
              <AccordionItem key={item.key} title={<span className="font-semibold">{item.title}</span>}>
                <span>{item.content}</span>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Button
          children={"Обсудить проект"}
          onPressHandle={openModal}
        />
      </div>
    </section>
  )
}