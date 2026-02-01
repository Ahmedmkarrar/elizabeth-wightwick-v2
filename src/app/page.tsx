import Hero from '@/components/home/Hero';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import AreaHighlight from '@/components/home/AreaHighlight';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Services />
      <AreaHighlight />
      <Testimonials />
      <CallToAction />
    </>
  );
}
