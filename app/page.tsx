import HeroSection from '@/components/HeroSection'
import CollectionQuestSection from '@/components/CollectionQuestSection'
import CreatorFeeSection from '@/components/CreatorFeeSection'
import OriginStorySection from '@/components/OriginStorySection'
import MovementSection from '@/components/MovementSection'
import IndexSection from '@/components/IndexSection'
import GettingStartedSection from '@/components/GettingStartedSection'
import SocialLinksFooter from '@/components/SocialLinksFooter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CollectionQuestSection />
      <CreatorFeeSection />
      <IndexSection />
      <OriginStorySection />
      <MovementSection />
      <GettingStartedSection />
      <SocialLinksFooter />
    </main>
  )
}

