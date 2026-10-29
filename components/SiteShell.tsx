"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuickEnquiryModal from "@/components/QuickEnquiryModal";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");
    return () => document.documentElement.classList.remove("js-enabled");
  }, []);

  return (
    <>
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />
      <main className="pt-20">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </>
  );
}
