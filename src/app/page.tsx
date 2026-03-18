import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import WhyDifferent from '@/components/home/WhyDifferent';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import AreaHighlight from '@/components/home/AreaHighlight';
import LifestyleGallery from '@/components/home/LifestyleGallery';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProperties />
      <WhyDifferent />
      <Services />
      <Stats />
      <AreaHighlight />
      <Testimonials />
      <LifestyleGallery />
      <CallToAction />
    </>
  );
}
