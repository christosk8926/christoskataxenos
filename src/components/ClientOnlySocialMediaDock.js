'use client';

import dynamic from 'next/dynamic';

const SocialMediaDock = dynamic(() => import('./SocialMediaDock'), { ssr: false });

export default function ClientOnlySocialMediaDock() {
  return <SocialMediaDock />;
}