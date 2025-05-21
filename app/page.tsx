import { sanityFetch } from "@/lib/sanity.client";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import { Slide } from "./animation/Slide";
import HeroSvg from "./assets/icons/HeroSvg";
import ContributionGraph from "./components/pages/GithubCalendarComponent";
import Job from "./components/pages/Job";
import SkillsComponent from "./components/pages/SkillsComponent";
import Social from "./components/shared/Social";
import Project from "./projects/page";

export const metadata: Metadata = {
  title: "onlyVishesh | Portfolio Website",
  metadataBase: new URL("https://onlyvishesh.vercel.app"),
  description:
    "This is my portfolio website that contains my projects, skills, and experiences",
  openGraph: {
    title: "onlyVishesh Portfolio Website",
    url: "https://onlyvishesh.vercel.app",
    description:
      "This is my portfolio website that contains my projects, skills, and experiences",
    images:
      "https://res.cloudinary.com/dklos8vki/image/upload/v1747638225/OnlyVishesh_zngciq.png",
  },
};

export default async function Home() {
  const profile: ProfileType = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <main className="max-w-full xl:max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div key={profile?._id} className=" xl:max-w-2xl max-w-full">
          <Slide>
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl md:text-6xl mb-6 lg:leading-[3.7rem] leading-tight xl:min-w-[600px] min-w-full">
              {profile?.headline ?? "Job Title"}
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              {profile?.shortBio ?? "Short bio description"}
            </p>
          </Slide>
          <div className="flex justify-between items-center flex-col md:flex-row pb-10 md:pb-0 ">
            <Slide delay={0.1}>
              <Social type="social" />
            </Slide>
            <Slide delay={0.1}>
              <Link
                href="/about"
                className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium dark:bg-secondary-color bg-secondary-color dark:hover:border-transparent dark:text-zinc-800 text-white hover:border-transparent"
                `}
              >
                Learn more about me
              </Link>
            </Slide>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <Slide delay={0.14}>
            <HeroSvg />
          </Slide>
        </div>
      </section>
      <ContributionGraph />
      <SkillsComponent />
      <Job />
      <div className="md:-mx-16 my-16 -mx-6 ">
        <Project />
      </div>
    </main>
  );
}
