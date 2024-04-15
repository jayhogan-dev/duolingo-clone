import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden md:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button
          size="lg"
          variant="ghost"
          className="w-full"
        >
          <Image
            src="/us.svg"
            alt="us flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-full"
        >
          <Image
            src="/swe.svg"
            alt="sweden flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Swedish
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-full"
        >
          <Image
            src="/es.svg"
            alt="spanish flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-full"
        >
          <Image
            src="/it.svg"
            alt="italian flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-full"
        >
          <Image
            src="/ger.svg"
            alt="german flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          German
        </Button>
      </div>
    </footer>
  );
};
