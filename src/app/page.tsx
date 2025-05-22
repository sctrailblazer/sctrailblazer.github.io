
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Newspaper, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const featureCards = [
  {
    title: 'Instagram Feed',
    description: 'Catch up on our latest adventures and photos from the trails.',
    href: 'https://www.instagram.com/sctrailblazer/',
    icon: Instagram,
    cta: 'View Instagram',
    target: '_blank',
  },
  {
    title: 'Our YouTube Channel',
    description: 'Watch our off-roading videos, trail guides, and Bronco action.',
    href: 'https://www.youtube.com/@sctrailblazer',
    icon: Youtube,
    cta: 'Visit YouTube Channel',
    target: '_blank',
  },
  {
    title: 'Our Blog',
    description: 'Read about our latest trips, tips, and off-roading stories.',
    href: 'https://sctrailblazer.blogspot.com/',
    icon: Newspaper,
    cta: 'Read Blog',
    target: '_blank',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-card rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Welcome to SCTrailBlazer!</h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto mb-6">
            Your ultimate destination for family-friendly 4x4 off-roading adventures in our Ford Bronco.
            Discover our latest Instagram posts, YouTube videos, and read our blog.
          </p>
          <Image
            src="https://i.imgur.com/WX9qAfV.png"
            alt="Ford Bronco Off-roading"
            width={1024}
            height={576}
            className="rounded-md shadow-xl mx-auto"
            data-ai-hint="bronco offroad"
            priority
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Explore Our Content</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featureCards.map((feature) => (
            <Card key={feature.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex-row items-center gap-4">
                <feature.icon className="w-10 h-10 text-primary" />
                <div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link
                    href={feature.href}
                    target={feature.target}
                    rel={feature.target === '_blank' ? 'noopener noreferrer' : undefined}
                  >
                    {feature.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
