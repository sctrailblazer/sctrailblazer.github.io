
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, LayoutDashboard, Newspaper } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: 'https://www.instagram.com/sctrailblazer/', label: 'Instagram', icon: Instagram, target: '_blank' },
  { href: 'https://www.youtube.com/@sctrailblazer', label: 'YouTube', icon: Youtube, target: '_blank' },
  { href: 'https://sctrailblazer.blogspot.com/', label: 'Blog', icon: Newspaper, target: '_blank' },
];

export function Header() {
  return (
    <header className="bg-card text-card-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full overflow-hidden relative flex-shrink-0">
            <Image
              src="https://i.imgur.com/w3wnGja.png"
              alt="SCTrailBlazer Emblem"
              fill
              className="object-cover object-left"
              priority
              sizes="40px"
            />
          </div>
          <span className="font-semibold text-xl text-primary">SCTrailBlazer</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
                  target={item.target}
                  rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                >
                  <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
