'use client';

import dynamic from 'next/dynamic';

const FloatingDock = dynamic(() => import('./FloatingDock'), { ssr: false });

export default function ClientOnlyFloatingDock() {
  return <FloatingDock />;
}