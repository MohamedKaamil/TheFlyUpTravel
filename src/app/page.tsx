import ProHero from '@/components/home/ProHero';
import ProIntro from '@/components/home/ProIntro';
import ProDestinations from '@/components/home/ProDestinations';
import ProFeaturedPackages from '@/components/home/ProFeaturedPackages';
import ProExperienceTypes from '@/components/home/ProExperienceTypes';
import ProHowItWorks from '@/components/home/ProHowItWorks';
import ProTestimonials from '@/components/home/ProTestimonials';
import ProCTA from '@/components/home/ProCTA';




// DELETE the old file: src/components/home/Services.tsx
// We are replacing it with ExperienceTypes.tsx

export default function Home() {
  return (
    <>
      <ProHero />
      <ProIntro />
      <ProDestinations />
      <ProFeaturedPackages />
      <ProExperienceTypes />
      <ProHowItWorks />
      <ProTestimonials />
      <ProCTA />
    </>
  );
}
