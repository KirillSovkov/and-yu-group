import { Link } from "@nextui-org/react";

export function Footer() {
  return (
    <div className="md:px-11 py-10 px-4 bg-[#00120C] grid grid-rows-1 grid-cols-2 md:grid-cols-3 gap-4">
    <div className="flex flex-col">
      <Link className="px-2 py-2 bg-white w-fit" color='foreground' href="#">
        <img className="hidden md:block" src="/logo/logo.svg" alt="logo" width={125} height={41} />
        <img className="md:hidden" src="/logo/logo-mobile.svg" alt="logo" width={125} height={41} />
      </Link>
      <span className="text-[10px] text-white">Комплектация интерьера</span>
    </div>
    <div className="flex flex-col text-white">
      <span>Контакты</span>
      <span>г. Новосибирск</span>
      <Link href="tel:89529436987" className="text-base text-white">+7 952 943 69 87</Link>
      <Link href="mailto:hello@andyu.ru" className="text-base text-white">hello@andyu.ru </Link>
      <Link href="mailto:hello@andyu.ru" className="text-base text-white">Whatsapp</Link>
    </div>
    <div className="flex flex-col col-span-2 text-white md:col-span-1">
      <span>Реквизиты</span>
      <span>ИП Сухорукова Ю. В.</span>
      <span>ИНН: 540137996937</span>
      <span>ОГРНИП: 324547600047115</span>
      <span>РС: 40802810320000270600</span>
    </div>
  </div>
  )
}