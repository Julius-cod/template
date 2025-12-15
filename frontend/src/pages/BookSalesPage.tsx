import React from 'react';
import { Navbar } from '../components/bookPage/Navbar';
import { Hero } from '../components/bookPage/Hero';
import { AuthorStrip } from '../components/bookPage/AuthorStrip';
import { ContentOverview } from '../components/bookPage/ContentOverview';
import { Reviews } from '../components/bookPage/Reviews';
import { ProductOptions } from '../components/bookPage/ProductOptions';
import { SecondaryProducts } from '../components/bookPage/SecondaryProducts';
import { Footer } from '../components/bookPage/Footer';

const BookSalesPage = () => {
  return (
    <div className="font-sans text-stone-900 bg-white min-h-screen selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <AuthorStrip />
        <ContentOverview />
        <Reviews />
        <ProductOptions />
        <SecondaryProducts />
      </main>
      <Footer />
    </div>
  );
};

export default BookSalesPage;
