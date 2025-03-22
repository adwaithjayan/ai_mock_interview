import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({children}:{children: React.ReactNode}) {
      return (
          <div className='root-layout'>
                <nav >
                      <Link href='/' className='flex items-center gap-2'>
                            <Image src='/logo.svg' alt='logo' width={38} height={32}/>
                            <h2 className='text-primary-100 '>PrepWise</h2>
                      </Link>
                </nav>
                {children}
          </div>
      )
}
