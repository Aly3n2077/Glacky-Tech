import Hero from "@/components/home/Hero";
import ServicesSummary from "@/components/home/ServicesSummary";
import UnlockingServices from "@/components/home/UnlockingServices";
import FRPServices from "@/components/home/FRPServices";
import DevicesSection from "@/components/home/DevicesSection";
import AdditionalServices from "@/components/home/AdditionalServices";
import IPhoneServices from "@/components/home/IPhoneServices";
import IPhoneShowcase from "@/components/home/IPhoneShowcase";
import BulkDeals from "@/components/home/BulkDeals";
import PaymentMethods from "@/components/home/PaymentMethods";
import StaticContact from "@/components/home/StaticContact";

export default function StaticHomePage() {
  return (
    <>
      <Hero />
      <ServicesSummary />
      <UnlockingServices />
      <FRPServices />
      <IPhoneServices />
      <IPhoneShowcase />
      <DevicesSection />
      <AdditionalServices />
      <BulkDeals />
      <PaymentMethods />
      <StaticContact />
    </>
  );
}