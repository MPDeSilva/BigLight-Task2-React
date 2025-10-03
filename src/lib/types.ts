export type CTA = { text: string; url: string };
export type Module =
  | ({ type: 'navbar'; utilityLinks: {label:string;url:string}[]; country?: string; logo:{text:string;url:string}; categories:{label:string;url:string}[]; promo?:{left:string; right:string; rightUrl:string} })
  | ({ type: 'hero'; image: string; alt: string; eyebrow?: string; title?: string; subtitle?: string; cta?: CTA })
  | ({ type: 'promo-grid'; items: { image: string; alt?: string; title?: string; caption?: string; cta?: string }[] })
  | ({ type: 'offer-banner'; text: string; cta?: CTA })
  | ({ type: 'product-grid'; title?: string; items: { image: string; alt?: string; title?: string; price?: string; url?: string }[] });
export type PageData = { modules: Module[] };
