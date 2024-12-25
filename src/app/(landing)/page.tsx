import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Flag } from "lucide-react";
import { MonzaButton } from "@/components/monza-button";

const Page = () => {
  return (
    <>
      <section className="realtive py-24 sm:py-32 bg-altbrand-25">
        <MaxWidthWrapper className="text-center">
          <div className="realtive mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Precision Event Monitoring 🏎️</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-400 to-brand-500 text-transparent bg-clip-text">
                  Delivered Directly to Your Discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              Monza is the best and fastest way to monitor your Saas. Get
              Instant Notifications for{" "}
              <span className="font-semibold text-gray-700">
                Sales, New Customers, or ANY Bespoke Events.
              </span>
            </p>
            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Real-Time Alerts for Critical Events",
                "Buy Once, use FOREVER",
                "Track Sales, New Customers, or ANY Bespoke Event",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Flag className="size-5 shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80 ">
              <MonzaButton href='/sign-up'
              className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Start For Free Today!
              </MonzaButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
};
export default Page;
