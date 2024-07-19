import IconStar from "@/public/icon-star.svg";
import Image from "next/image";
import Link from "next/link";
import Accordion from "./components/Accordion";
import DesktopBackgroundImage from "@/public/background-pattern-desktop.svg";
import MobileBackgroundImage from "@/public/background-pattern-mobile.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-lightPink flex-col justify-center items-center">
      <Image
        src={DesktopBackgroundImage}
        width={0}
        height={0}
        alt=""
        className="hidden lg:block background-img"
      />
      <Image
        src={MobileBackgroundImage}
        width={0}
        height={0}
        alt=""
        className="block lg:hidden background-img"
      />

      <article className="bg-white text-black z-10 p-10 mx-10 lg:mx-0 max-w-[600px] rounded-xl">
        <header className="flex items-center gap-8 mb-5">
          <Image src={IconStar} width={40} height={40} alt="" />
          <strong className="text-6xl text-darkPurple">FAQs</strong>
        </header>
        <Accordion
          entries={[
            {
              title: "What is Frontend Mentor, and how will it help me?",
              children: (
                <p>
                  Frontend Mentor offers realistic coding challenges to help
                  developers improve their frontend coding skills with projects
                  in HTML, CSS, and JavaScript. It's suitable for all levels and
                  ideal for portfolio building.
                </p>
              ),
            },
            {
              title: "Is Frontend Mentor free?",
              children: (
                <p>
                  Yes, Frontend Mentor offers both free and premium coding
                  challenges, with the free option providing access to a range
                  of projects suitable for all skill levels.
                </p>
              ),
            },
            {
              title: "Can I use Frontend Mentor projects in my portfolio?",
              children: (
                <p>
                  Yes, you can use projects completed on Frontend Mentor in your
                  portfolio. It's an excellent way to showcase your skills to
                  potential employers!
                </p>
              ),
            },
            {
              title:
                "How can I get help if I'm stuck on a Frontend Mentor challenge?",
              children: (
                <p>
                  The best place to get help is inside Frontend Mentor's Discord
                  community. There's a help channel where you can ask questions
                  and seek support from other community members.
                </p>
              ),
            },
          ]}
        />
      </article>

      <footer className="text-[11px] mt-2 text-center text-black">
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link
          href="https://www.frontendmentor.io/profile/mw-138"
          target="_blank"
        >
          mw-138
        </Link>
        .
      </footer>
    </main>
  );
}
