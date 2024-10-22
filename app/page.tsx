import Link from "next/link";
import ThreeExperience from "@/components/ThreeExperience";

export default function Home() {
  return (
    <>
      <ThreeExperience />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-60">
        <h1
          className="text-8xl"
          style={{
            fontFamily: "Impact",
          }}
        >
          Hi! I&apos;m DV
        </h1>
        <Link href="posts" className="underline text-base">
          Visit: Blog <br />
        </Link>
      </div>
    </>
  );
}
