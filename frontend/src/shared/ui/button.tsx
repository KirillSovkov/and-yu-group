import { Button as ButtonNextUi } from "@nextui-org/react"

type ButtonProps = {
  children: React.ReactNode | string;
  onPressHandle: () => void;
}

export function Button({ children, onPressHandle }: ButtonProps) {
  return (
    <ButtonNextUi 
      radius="none" 
      color="primary" 
      size="lg" 
      className="md:px-20" 
      onPress={() => onPressHandle()}
    >
      {children}
    </ButtonNextUi>
  )
}