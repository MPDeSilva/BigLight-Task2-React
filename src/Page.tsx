import React from 'react';
import renderModule from '@/lib/mapModule';
import type { PageData } from '@/lib/types';

export default function Page({ data }: { data: PageData }) {
  return <>{data.modules.map((m, i) => renderModule(m as any, i))}</>;
}
