import { Image } from "@nextui-org/react"; // Предполагается, что вы используете Next.js для работы с изображениями

export function AboutSection() {
  return (
    <section id="aboutUs" className="scroll-mt-24">
      <div className="flex flex-col items-center justify-center px-4 py-10 md:px-11 bg-foreground-100 gap-9">
        <h1 className="relative text-2xl font-medium text-black md:text-4xl before:content-['_'] before:absolute before:-bottom-2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:w-1/2 before:h-[1px] before:bg-black">
          О нас
        </h1>
        <div className="flex flex-col w-full gap-6 lg:w-4/6 md:w-full">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
            <Image
              src="/images/workers/worker-1.jpg"
              alt="worker"
              radius="none"
              className="z-0 object-cover"
              isZoomed={true}
            />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium text-center xl:text-3xl md:text-2xl md:text-left">Меня зовут Андрей Сухоруков, я основатель компании And Yu Group.</p>
              <span className="flex flex-col gap-4 text-base text-center xl:text-xl md:text-left">
                <span>
                  Наша команда занимается профессиональной комплектацией частных и коммерческих объектов любой сложности.
                </span>
                <span>
                  Предоставляем полный спектр услуг по подбору и поставке материалов и товаров на ваш объект. Активно сотрудничаем с дизайнерами интерьеров, архитекторами и строительными фирмами.
                </span>
                Мой опыт работы в строительной сфере более 15-ти лет.С 2021 года являюсь руководителем собственной компании.За этот период нашей командой было укомплектовано более 540 объектов.
                <span className="flex-1 mt-auto text-base xl:text-xl">
                  AndYuGroup это про сервис. Мы дарим своим клиентам самый ценный ресурс - <span className="underline">время</span>.
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
            <div className="flex flex-col items-center w-full gap-4 text-center md:grid md:grid-cols-2 lg:grid-cols-1">
              <div className="md:order-2">
                <Image
                  radius="none"
                  src="/images/workers/worker-2.jpg"
                  alt="worker"
                  className="z-0 object-cover"
                  isZoomed={true}
                />
              </div>
              <div className="flex flex-col gap-4 lg:order-2">
                <span className="text-xl font-semibold">Сухорукова Юлия</span>
                <span>Руководитель отдела дизайна</span>
                <span>
                  Наша команда дизайнеров сделает ваше пространство уютным, комфортным и эргономичным.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-4 text-center md:grid md:grid-cols-2 lg:grid-cols-1">
              <div>
                <Image
                  radius="none"
                  src="/images/workers/worker-3.jpg"
                  alt="worker"
                  className="z-0 object-cover"
                  isZoomed={true}
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xl font-semibold">Прозорова Анастасия</span>
                <span>Руководитель отдела продаж</span>
                <span>
                  Наши менеджеры приложат максимум своей экспертности чтобы сэкономить ваше время и сделать самое лучшее и наиболее выгодное предложение.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}