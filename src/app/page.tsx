import Hero from '@/components/home/Hero';
import FeaturedProperties from '@/components/home/FeaturedProperties';
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
      <FeaturedProperties />
      <Stats />
      <Services />
      <AreaHighlight />
      <Testimonials />
      <LifestyleGallery />
      <CallToAction />
    </>
  );
}
