"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { sponsorOptions } from "./sponsorOptions";
import { useEffect, useState } from "react";

const SponsorPage = () => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-4">Sponsor My Work 👋</h1>
      <p className="text-lg mb-6 max-w-screen-lg">
        If you enjoy using my tools and appreciate my work, you can show your
        support through the following sponsorship options. Your support helps me
        continue creating and maintaining these resources. Thank you for your
        generosity and for being an amazing part of this journey!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {sponsorOptions.map((option) => {
          const src = isDarkMode
            ? option.logo
            : `${option.logo.split(".")[0]}_light.${option.logo.split(".")[1]}`;
          return (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-rows-subgrid row-span-2 p-4 text-center bg-card text-card-foreground rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <Image
                src={src}
                alt={option.name}
                className="place-self-center"
                width={96}
                height={96}
              />
              <span className="text-xl font-medium">{option.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SponsorPage;
