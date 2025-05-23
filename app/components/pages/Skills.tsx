"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsImage } from "../../utils/skill-image";
import { skillsData } from "../../utils/skills";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="relative z-50 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit flex-1"
    >
      <div className="w-[100px] h-[100px] rounded-full absolute left-[42%] translate-x-1/2 filter blur-3xl opacity-20" />

      <div className="w-full my-0">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill: string, id: number) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border dark:border-[#1f223c] dark:bg-[#b5b5b5] dark:shadow-gray-50 dark:group-hover:border-gray-500 border-[#8e8e8e] bg-[#d4d4d4] shadow-gray-50 group-hover:border-gray-500transition-all duration-500 shadow-none">
                <div className="flex -translate-y-[1px] justify-center"></div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill) ?? "/default.png"}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg "
                    />
                  </div>
                  <p className="text-black text-sm sm:text-lg font-semibold">
                    {skill}
                  </p>
                </div>
                <div className="mx-auto w-3/4">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
