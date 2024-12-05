import useModalStore from "../../../shared/lib/modal-store"
import { Button } from "../../../shared/ui/button"

export function HeroSection() {

  const { openModal } = useModalStore();

  return (
    <section className="w-full h-[90vh] flex justify-center items-center relative top-0">
      <img
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 w-full p-4 sm:w-[575px] flex flex-col gap-8 text-center items-center">
        <h1 className="text-4xl sm:w-[480px] w-[300px] font-medium text-white">
          Комплектация интерьера «под ключ»
        </h1>
        <span className="w-full text-xl text-white sm:w-96">
          Профессиональный подбор всех необходимых материалов для вашего проекта
        </span>
        <Button
          children={"Обсудить проект"}
          onPressHandle={openModal}
        />
      </div>
    </section>
  )
}