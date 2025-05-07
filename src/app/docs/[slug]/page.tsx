import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>; // Update params to be a Promise
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // Await the params
  return {
    title: `${resolvedParams.slug} Documentation`,
    description: `Documentation for ${resolvedParams.slug}`,
  };
}

export default function DocPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>{params.slug} Documentation</h1>
    </div>
  );
}