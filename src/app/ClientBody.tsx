"use client";

import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function ClientBody({ children }: { children: React.ReactNode }) {
  // Set up the animation observer and header fix on initial render
  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      // Header visibility fix
      const header = document.getElementById('main-header');
      if (header) {
        header.style.display = 'flex';
        header.style.visibility = 'visible';
        
        const nav = header.querySelector('nav') as HTMLElement;
        if (nav && window.innerWidth >= 768) {
          nav.style.display = 'flex';
          nav.style.visibility = 'visible';
        }
        
        const buttons = header.querySelector('.header-buttons') as HTMLElement;
        if (buttons && window.innerWidth >= 768) {
          buttons.style.display = 'flex';
          buttons.style.visibility = 'visible';
        }
      }

      // Function to handle intersections
      const handleIntersections = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      };

      // Set up observer
      const observer = new IntersectionObserver(handleIntersections, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      });

      // Select all elements to animate
      const elements = document.querySelectorAll('.fade-up, .stagger-item');
      elements.forEach(el => observer.observe(el));

      // Clean up
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
