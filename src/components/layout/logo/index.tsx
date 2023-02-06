import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => (
  <Link href='/' className='navbar-brand font-bold text-white text-2xl '>
    <Image
      src='/supeconomy.png'
      alt='Supeconomy-Home'
      className='d-inline-block align-top'
    ></Image>
  </Link>
);

export default Logo;
