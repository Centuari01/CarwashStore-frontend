import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const Popup = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/menulight.png" alt="delete" width={40} height={40} />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-16 flex justify-between flex-col items-start gap-y-6 text-lg">
          <Link href="/about" className="Link">
            About
          </Link>
          <Link href="/contact" className="Link">
            Contact
          </Link>
          <Link href="/profile" className="Link">
            Profile
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Popup;
