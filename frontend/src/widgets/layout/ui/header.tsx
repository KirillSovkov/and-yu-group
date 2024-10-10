import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { FeedbackItemsI, NavigationLinksI } from "../model";
import { PhoneCall, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react";

const navigationLinks: NavigationLinksI[] = [
  { title: "Направления", section: "directions" },
  { title: "Этапы работы", section: "stagesWork" },
  { title: "Преимущества", section: "advantages" },
  { title: "О нас", section: "aboutUs" },
  { title: "Сотрудничество", section: "cooperation" },
]

const feedbackItems: FeedbackItemsI[] = [
  { icon: <PhoneCall size={24} />, href: "tel:+79994660818" },
  { icon: <WhatsappLogo size={24} />, href: "https://api.whatsapp.com/send/?phone=79529346987&text&type=phone_number&app_absent=0" },
  { icon: <TelegramLogo size={24} />, href: "https://t.me/and_yu_group" },
]

export function Header() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false)
    }
  };

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      isMenuOpen={isMenuOpen} 
      className="py-4" 
      isBordered={true} 
      isBlurred={false} 
      maxWidth="2xl"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link className="flex flex-col" color='foreground' href="#">
            <img src="/logo/logo.svg" alt="logo" width={125} height={41} />
            <span className="text-[10px]">Комплектация интерьера</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        {navigationLinks.map((item, index) => (
          <NavbarItem key={index}>
            <Link 
              color='foreground' 
              underline="focus" 
              onPress={() => scrollToSection(item.section)}
              className="cursor-pointer"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="items-center hidden gap-2 sm:flex">
          {feedbackItems.map((item, index) => (
            <Link key={index} href={item.href} target="_blank">
              <Button className="border-none text-foreground-700" isIconOnly variant="ghost" radius="sm" color="primary">
                {item.icon}
              </Button>
            </Link>
          ))}
        </div>
        <NavbarMenuToggle
          className="lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="items-end pb-20 mt-8">
        {navigationLinks.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              underline="active"
              className="w-full cursor-pointer"
              onPress={() => scrollToSection(item.section)}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="flex flex-col items-end gap-3 mt-auto">
          {feedbackItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href} target="_blank">
                <Button size="lg" className="text-white border-none" isIconOnly radius="sm" color="primary">
                  {item.icon}
                </Button>
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="flex flex-col items-end mt-auto">
          <Link className="text-lg" href="mailto:hello@andyu.ru">hello@andyu.ru</Link>
          <Link className="text-lg" href="tel:89529346987">+7 (952) 934-69-87</Link>
        </div>
        </div>
      </NavbarMenu>
    </Navbar>
  )
}