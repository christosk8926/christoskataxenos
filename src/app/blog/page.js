'use client';
import UnderConstruction from '../../components/UnderConstruction';
import { CodeIcon } from '../../components/Icons';
import SpotlightCard from '../../components/SpotlightCard';

export const metadata = {
  title: "Dev Blog | Christos Kataxenos",
};

export default function BlogPage() {
  return <UnderConstruction title="Dev Blog" Icon={CodeIcon} SpotlightCard={SpotlightCard} />;
}
