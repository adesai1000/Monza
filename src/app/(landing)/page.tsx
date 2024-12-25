import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Flag } from "lucide-react";
import { MonzaButton } from "@/components/monza-button";
import { MockDiscordUI } from "@/components/mock-discord-ui";
import { DiscordMessage } from "@/components/discord-message";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"

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
              <MonzaButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today!
              </MonzaButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative bg-altbrand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-altbrand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.jpg"
                    avatarAlt="Monza Avatar"
                    username="Monza"
                    timestamp="Today at 12:35PM"
                    badgeText="SignUp"
                    badgeColor="#43b581"
                    title="👤 New Customer"
                    content={{
                      name: "Christopher Edwin Breaux",
                      email: "cbreaux@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.jpg"
                    avatarAlt="Monza Avatar"
                    username="Monza"
                    timestamp="Today at 12:35PM"
                    badgeText="Revenue"
                    badgeColor="#faa61a"
                    title="💰 Payment Received"
                    content={{
                      amount: "$49.00",
                      name: "Jean-Michel Basquiat",
                      email: "jean-michel@email.com",
                      plan: "PRO",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.jpg"
                    avatarAlt="Monza Avatar"
                    username="Monza"
                    timestamp="Today at 5:11AM"
                    badgeText="Milestone"
                    badgeColor="#5865f2"
                    title="🚀 Revenue Milestone"
                    content={{
                      recurringRevenue: "$500,000.00 USD",
                      growth: "+20.2%",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
};
export default Page;
