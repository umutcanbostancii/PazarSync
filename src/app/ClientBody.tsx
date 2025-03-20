"use client";

import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function ClientBody({ children }: { children: React.ReactNode }) {
  // Set up the animation observer on initial render
  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
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
