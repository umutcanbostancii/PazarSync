"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const EkibimizPage = () => {
  const teamMembers = [
    {
      name: "Umut Can Bostancı",
      role: "CEO & Kurucu Ortak",
      image: "/images/team/ceo.webp",
      bio: "10+ yıllık e-ticaret ve yazılım deneyimiyle PazarSync'i kurdu. E-ticaretin geleceğini şekillendirme vizyonuyla ekibe liderlik ediyor.",
      social: {
        linkedin: "https://www.linkedin.com/in/umut-can-bostanci/",
        twitter: "https://twitter.com/umutcanbostanci",
      },
    },
    {
      name: "Yapay Zeka",
      role: "CTO & Kurucu Ortak",
      image: "/images/team/cto.webp",
      bio: "PazarSync'in teknoloji vizyonunu ve altyapısını yönetiyor. Yenilikçi çözümlerle platformu sürekli ileri taşıyor.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Ahmet Yılmaz",
      role: "Baş Geliştirici",
      image: "/images/team/team.webp",
      bio: "PazarSync'in çekirdek sistemlerinin geliştirilmesinden sorumlu. Güçlü ve ölçeklenebilir bir altyapı sağlıyor.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Ayşe Kaya",
      role: "Pazarlama Direktörü",
      image: "/images/team/team.webp",
      bio: "PazarSync'in marka bilinirliğini ve büyüme stratejilerini yönetiyor. Dijital pazarlama ve iletişimde uzman.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Fatma Demir",
      role: "Ürün Yöneticisi",
      image: "/images/team/team.webp",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mehmet Çelik",
      role: "Müşteri Başarı Uzmanı",
      image: "/images/team/team.webp",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/kurumsal" className="text-primary inline-flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 rotate-180"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            Kurumsal&apos;a Dön
          </a>
          <h1 className="heading-lg mb-6">Ekibimiz</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            PazarSync&apos;i bu noktaya getiren güçlü ekibimizle tanışın. Tüm ekip üyelerimiz, e-ticaret ve teknoloji alanlarında geniş deneyime sahiptir.
          </p>
        </div>

        {/* Team Overview */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/team/team.webp"
                alt="PazarSync Ekibi"
                className="object-cover rounded-xl"
                fill
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6">Birlikte Daha Güçlüyüz</h2>
              <p className="text-muted-foreground mb-4">
                PazarSync ekibi, e-ticaret ve yazılım geliştirme konularında derin bilgi ve deneyime sahip uzmanlardan oluşmaktadır. Her bir ekip üyemiz, müşterilerimizin başarısı için tutku ile çalışmaktadır.
              </p>
              <p className="text-muted-foreground mb-4">
                İnovasyon, müşteri odaklılık ve sürekli gelişim ilkelerimizle hareket eden ekibimiz, e-ticaret dünyasının karmaşık yapısını anlayarak müşterilerimize en etkili çözümleri sunmaktadır.
              </p>
              <p className="text-muted-foreground">
                Farklı geçmişlere ve uzmanlık alanlarına sahip ekip üyelerimiz, zengin bir bakış açısı ve yaratıcı çözümler geliştirmemize yardımcı olmaktadır.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h2 className="text-3xl font-light mb-12 text-center">Yönetim Kadromuz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-64 w-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                    <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <section className="py-12 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">PazarSync Ailesine Katılın</h2>
                <p className="text-muted-foreground mb-6">
                  E-ticaretin geleceğini şekillendiren bir ekibin parçası olmak ister misiniz? Açık pozisyonlarımızı inceleyin ve bize katılın.
                </p>
                <Link href="/kurumsal/kariyer">
                  <Button>Açık Pozisyonlar</Button>
                </Link>
              </div>
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/team/team.webp"
                  alt="PazarSync Ofis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EkibimizPage; 