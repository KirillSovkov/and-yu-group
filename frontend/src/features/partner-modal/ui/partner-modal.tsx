import { useState } from "react";
import * as yup from "yup";

import { Select, SelectItem, Button, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

import { formatPhoneNumber } from "../../../shared/lib/phone-formatter";
import { XSquare } from "@phosphor-icons/react";
import { PartnerSendMail } from "../api";

type PartnerModalProps = {
  isModalOpen: boolean;
  toggleModalHandle: () => void;
}

const activity = [
  { key: "designer", value: 'Дизайнер' },
  { key: "construction", value: 'Строительная организация' },
  { key: "supplier", value: 'Поставщик' },
  { key: "other", value: 'Другое' },
];

export function PartnerModal({ isModalOpen, toggleModalHandle }: PartnerModalProps) {

  const validationSchema = yup.object().shape({
    activityPartner: yup.string().required("Выберете один из вариантов"),
    phonePartner: yup.string().min(11, "Введите корректный номер").required("Введите номер телефона"),
    partner: yup.string()
      .matches(/^[а-яё -]+$/i, { message: "Пожалуйста, используйте кириллицу" })
      .matches(/[^\d]/g, { message: "Пожалуйста, не используйте цифры" })
      .required("Введите имя")
  });

  const [partner, setPartner] = useState<string>("");
  const [activityPartner, setActivityPartner] = useState<string>("");
  const [phonePartner, setPhonePartner] = useState<string>("");

  const [errorActivityMessage, setActivityErrorMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState<string>("");

  const [isSending, setIsSending] = useState<boolean>(false);
  const [isErrorSending, setIsErrorSending] = useState<boolean>(false);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, errorSetter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(event.target.value);
      errorSetter("");
    };

  const phonePartnerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setPhonePartner(formattedValue);
    setPhoneErrorMessage("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await validationSchema.validate({ partner, phonePartner: phonePartner.replace(/\D/g, ''), activityPartner }, { abortEarly: false });
      setErrorMessage("");
      setPhoneErrorMessage("");
      setActivityErrorMessage("");
      setIsSending(true);
      setIsErrorSending(false);
      await PartnerSendMail({ partner, phonePartner, activityPartner })
        .then((response) => {
          if (response.status === 200) {
            setIsSending(false);
            setPartner("");
            setPhonePartner("");
            setActivityPartner("");
            toggleModalHandle();
          }
        }).catch((err) => {
          if (err) {
            setIsErrorSending(true);
            setIsSending(false);
          }
        })
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          if (err.path === "partner") {
            setErrorMessage(err.message);
          } else if (err.path === "activityPartner") {
            setActivityErrorMessage(err.message);
          } else if (err.path === "phonePartner") {
            setPhoneErrorMessage(err.message);
          }
        });
      }
    }
  };

  const resetForm = () => {
    setPartner("");
    setActivityPartner("");
    setPhonePartner("");
    setErrorMessage("");
    setActivityErrorMessage("");
    setPhoneErrorMessage("");
    setIsSending(false);
    setIsErrorSending(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      placement="auto"
      radius="none"
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          resetForm();
        }
        toggleModalHandle();
      }}
      closeButton={
        <Button isIconOnly variant="light" onClick={toggleModalHandle}>
          <XSquare color="black" size={38} />
        </Button>
      }
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 p-0">
              <div className="-z-10">
                <Image
                  src="/images/modal_image_2.jpg"
                  alt="modal"
                  radius="none"
                />
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center w-4/5 gap-3 m-auto text-center">
                <form className="flex flex-col w-full gap-5" onSubmit={handleSubmit}>
                  <Input
                    variant="underlined"
                    type="text"
                    label="Ваше  ФИО"
                    value={partner}
                    isInvalid={!!errorMessage}
                    onChange={handleInputChange(setPartner, setErrorMessage)}
                    errorMessage={errorMessage}
                  />
                  <Input
                    variant="underlined"
                    type="text"
                    label="Введите номер"
                    placeholder="+7 (000) 000 00-00"
                    value={phonePartner}
                    onChange={phonePartnerHandler}
                    isInvalid={!!phoneErrorMessage}
                    errorMessage={phoneErrorMessage}
                  />
                  <Select
                    label="Деятельность"
                    className="max-w-xs"
                    placeholder="Выберете варант"
                    variant="underlined"
                    value={activityPartner}
                    onChange={handleInputChange(setActivityPartner, setActivityErrorMessage)}
                    isInvalid={!!errorActivityMessage}
                    errorMessage={errorActivityMessage}
                  >
                    {activity.map((item) => (
                      <SelectItem key={item.key} value={item.key}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                  <Button
                    type="submit"
                    radius="none"
                    color={isErrorSending ? "danger" : "primary"}
                    size="md"
                    className="w-full"
                    isLoading={isSending}
                  >
                    {isErrorSending ? "Ошибка" : "Отправить"}
                  </Button>
                </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <p className="text-[8px] font-light text-center select-none">
                НАЖИМАЯ КНОПКУ «Отправить», Я ДАЮ СВОЕ СОГЛАСИЕ НА ОБРАБОТКУ
                МОИХ ПЕРСОНАЛЬНЫХ ДАННЫХ, В СООТВЕТСТВИИ С ФЕДЕРАЛЬНЫМ ЗАКОНОМ
                ОТ 27.07.2006 ГОДА №152-ФЗ «О ПЕРСОНАЛЬНЫХ ДАННЫХ»,
                НА УСЛОВИЯХ И ДЛЯ ЦЕЛЕЙ, ОПРЕДЕЛЕННЫХ В СОГЛАСИИ НА ОБРАБОТКУ
                ПЕРСОНАЛЬНЫХ ДАННЫХ*
              </p>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}