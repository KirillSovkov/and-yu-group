import { Footer } from "./footer";
import { Header } from "./header";

export type LayoutProps = {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[1992px] m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}