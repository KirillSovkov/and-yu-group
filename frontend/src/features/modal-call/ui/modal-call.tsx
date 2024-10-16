import { useState } from "react";
import * as yup from "yup";
import { Button, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { XSquare } from "@phosphor-icons/react";

import { formatPhoneNumber } from "../../../shared/lib/phone-formatter";
import { ClientSendMail } from "../api";

type ModalCallMeProps = {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCallMe({ isOpen, onClose }: ModalCallMeProps) {

  const validationSchema = yup.object().shape({
    clientPhone: yup.string().min(11, "Введите корректный номер")
      .required("Введите номер телефона"),
    client: yup.string()
      .matches(/^[а-яё -]+$/i, { message: "Пожалуйста, используйте кириллицу" })
      .matches(/[^\d]/g, { message: "Пожалуйста, не используйте цифры" })
      .required("Введите имя")
  });

  const [client, setClient] = useState<string>("");
  const [phoneClient, setPhoneClient] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  const [isSending, setIsSending] = useState<boolean>(false);
  const [isErrorSending, setIsErrorSending] = useState<boolean>(false);

  const phoneClientHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value)
    setPhoneClient(formattedValue);
    setPhoneErrorMessage("");
  }

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClient(event.target.value);
    setErrorMessage("");
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      await validationSchema.validate({ client, clientPhone: phoneClient.replace(/\D/g, '') }, { abortEarly: false });
      setErrorMessage("");
      setPhoneErrorMessage("");
      setIsSending(true);
      setIsErrorSending(false);
      await ClientSendMail({ client: client, phoneClient: phoneClient })
        .then((response) => {
          if (response.status === 200) {
            setIsSending(false);
            setClient("");
            setPhoneClient("");
            onClose();
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
          if (err.path === "client") {
            setErrorMessage(err.message);
          } else if (err.path === "clientPhone") {
            setPhoneErrorMessage(err.message);
          }
        });
      }
    }
  }

  const resetForm = () => {
    setClient("");
    setErrorMessage("");
    setPhoneClient("");
    setPhoneErrorMessage("");
    setIsSending(false);
    setIsErrorSending(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      placement="auto"
      radius="none"
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          resetForm();
        }
        onClose();
      }}
      closeButton={
        <Button isIconOnly variant="light" onClick={onClose}>
          <XSquare color="white" size={38} />
        </Button>
      }
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 p-0">
              <div className="-z-10">
                <Image
                  src="/images/modal_image_1.jpg"
                  alt="modal"
                  radius="none"
                />
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center w-4/5 gap-1 m-auto text-center">
                <span className="text-2xl font-medium">Оставьте контакты</span>
                <span className="text-sm font-normal">и мы свяжемся с Вами в ближайшее время</span>
                <form className="flex flex-col w-full gap-3" onSubmit={handleSubmit}>
                  <Input
                    variant="underlined"
                    type="text"
                    label="Введите номер"
                    placeholder="+7 (000) 000 00-00"
                    value={phoneClient}
                    onChange={(e) => phoneClientHandler(e)}
                    isInvalid={!!phoneErrorMessage}
                    errorMessage={phoneErrorMessage}
                  />
                  <Input
                    variant="underlined"
                    type="text"
                    label="Ваше имя"
                    value={client}
                    isInvalid={!!errorMessage}
                    onChange={handleClientChange}
                    errorMessage={errorMessage}
                  />
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
            <ModalFooter className="pt-0">
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
  )
}