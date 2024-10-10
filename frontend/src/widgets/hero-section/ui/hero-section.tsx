import useModalStore from "../../../shared/lib/modal-store"
import { Button } from "../../../shared/ui/button"

export function HeroSection() {
  
  const { openModal } = useModalStore();

  return (
    <section>
      <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-bottom bg-fixed w-full h-screen flex justify-center items-center">
        <div className="w-full p-4 sm:w-[575px] flex flex-col gap-8 text-center items-center">
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
      </div>
    </section>
  )
}