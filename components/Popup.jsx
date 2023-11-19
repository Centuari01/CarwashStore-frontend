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
        <div className="mt-16 flex  justify-between flex-col items-start text-lg">
        <Link href='/about' className='Link'>About</Link>
          <Link href='/Locations' className='Link'>Locations</Link>
          <Link href='/Services' className='Link'>Services</Link>
          <Link href='/profile'  className='Link'>Profile</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Popup;
