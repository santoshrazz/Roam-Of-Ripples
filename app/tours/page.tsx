import { Header } from "@/components/Header";
import { TourPackages } from "@/components/TourPackages";

const page = () => {
  return (
    <div className="mt-10">
      <Header />
      <TourPackages />
    </div>
  );
};

export default page;
export async function generateMetadata() {
  return {
    title: `RoamRipples |Travel infrastructure for businesses that move the world. | Tour`,
    description:
      "We are a B2B travel agency built for organizations that need reliability, scale, and precision—not guesswork. Our role is simple: we handle the complexity of travel so your business can focus on what actually matters.From corporate travel management to customized itineraries, negotiated rates, and 24/7 operational support, we act as an extension of your team. We combine industry expertise, strong supplier relationships, and efficient systems to deliver travel solutions that are cost-effective, compliant, and frictionless.Whether you’re managing frequent business travel, large groups, or specialized requirements, we bring clarity to logistics,transparency to pricing, and consistency to service. No fluff, no surprises—just travel that works as hard as your business does..",
    alternates: {
      canonical: "https://roamripples.com/tours",
    },
    openGraph: {
      title: `RoamRipples |Travel infrastructure for businesses that move the world. | Contact`,
      description:
        "We are a B2B travel agency built for organizations that need reliability, scale, and precision—not guesswork. Our role is simple: we handle the complexity of travel so your business can focus on what actually matters.From corporate travel management to customized itineraries, negotiated rates, and 24/7 operational support, we act as an extension of your team. We combine industry expertise, strong supplier relationships, and efficient systems to deliver travel solutions that are cost-effective, compliant, and frictionless.Whether you’re managing frequent business travel, large groups, or specialized requirements, we bring clarity to logistics,transparency to pricing, and consistency to service. No fluff, no surprises—just travel that works as hard as your business does..",
      url: "https://roamripples.com/tours",
      siteName: "Santosh Kumar",
      images: [
        {
          url: "https://roamripples.com/logo.jpg",
          width: 800,
          height: 600,
          alt: `RoamRipples`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `RoamRipples |Travel infrastructure for businesses that move the world. | Contact`,
      description:
        "We are a B2B travel agency built for organizations that need reliability, scale, and precision—not guesswork. Our role is simple: we handle the complexity of travel so your business can focus on what actually matters.From corporate travel management to customized itineraries, negotiated rates, and 24/7 operational support, we act as an extension of your team. We combine industry expertise, strong supplier relationships, and efficient systems to deliver travel solutions that are cost-effective, compliant, and frictionless.Whether you’re managing frequent business travel, large groups, or specialized requirements, we bring clarity to logistics,transparency to pricing, and consistency to service. No fluff, no surprises—just travel that works as hard as your business does..",
      creator: `Santosh Kumar`,
      images: [`https://roamripples.com/logo.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL("https://roamripples.com"),
  };
}
