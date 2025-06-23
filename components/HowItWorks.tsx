import { HoverEffect } from "./ui/card-hover-effect";


export function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold text-center">How It Works</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "1. Browse Artists",
    description:
      "Explore by category, price and location.",
    link: "",
  },
  {
    title: "2. Send a Request",
    description:
      "Raise availability or booking inquiry easily.",
    link: "",
  },
  {
    title: "3. Confirm & Book",
    description:
      "Seal the deal with quick confirmation.",
    link: "",
  },
];
