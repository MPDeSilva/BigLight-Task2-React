import React from 'react';
import type { Module } from './types';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import PromoGrid from '@/components/PromoGrid/PromoGrid';
import OfferBanner from '@/components/OfferBanner/OfferBanner';
import ProductGrid from '@/components/ProductGrid/ProductGrid';

export default function renderModule(mod: Module, idx: number) {
  switch (mod.type) {
    case 'navbar': return <Navbar key={idx} {...mod} />;
    case 'hero': return <Hero key={idx} {...mod} />;
    case 'promo-grid': return <PromoGrid key={idx} {...mod} />;
    case 'offer-banner': return <OfferBanner key={idx} {...mod} />;
    case 'product-grid': return <ProductGrid key={idx} {...mod} />;
    default: return null;
  }
}
