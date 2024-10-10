import { Layout } from "../../../widgets/layout";
import { HeroSection } from "../../../widgets/hero-section";
import { DirectionsSection } from "../../../widgets/directions";
import { StageWorkSection } from "../../../widgets/stages-work-section";
import { AdvantagesSection } from "../../../widgets/advantages-section";
import { AboutSection } from "../../../widgets/about-us-section";
import { CooperationSection } from "../../../widgets/cooperation-section";
import { FaqSection } from "../../../widgets/faq-section";
import { ModalCallMe } from "../../../features/modal-call";
import useModalStore from "../../../shared/lib/modal-store";

export function HomePage() {
const { isOpenCallMeModal, closeModal } = useModalStore();

  return (
      <Layout>
        <HeroSection />
        <DirectionsSection />
        <StageWorkSection />
        <AdvantagesSection />
        <AboutSection />
        <CooperationSection />
        <FaqSection />
        <ModalCallMe isOpen={isOpenCallMeModal} onClose={closeModal} />
      </Layout>
  )
}