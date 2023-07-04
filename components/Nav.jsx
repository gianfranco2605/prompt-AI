"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { singIn, singOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex gap-2 flex-center">
            <Image 
              src='/assets/images/logo.svg'
              alt='PromptNavs Logo'
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="logo_text">PromptNavas</p>
        </Link>
        {/* Desktok Nav */}
        <div className="sm:flex hidden">
           {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt" className="black_btn">
                Crea messaggio
                </Link>
                <button type="button" onClick={singOut} className="outline_btn">
                Disconnetta
                </button>
                <Link href='/profile'>
                    <Image  
                      src='/assets/images/logo.svg'
                      width={37}
                      height={37}
                      className="rounded-fill"
                      alt="profile"
                    />
                </Link>
            </div>
            ) : (
                <>
                {providers && 
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      type="button"
                      onClick={() => singIn(provider.id)}
                      className="black_btn"
                    >
                        Sing In
                    </button>
                  ))
                }
                </>
            )
           }
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden flex relative">
            {isUserLoggedIn ? (
                <div className="flex">
                    <Image  
                      src='/assets/images/logo.svg'
                      width={37}
                      height={37}
                      className="rounded-fill"
                      alt="profile"
                      onClick={() => {}}
                    />
                </div>
            ) : (
                <>
                {providers && 
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      type="button"
                      onClick={() => singIn(provider.id)}
                      className="black_btn"
                    >
                        Sing In
                    </button>
                  ))
                }
                </>
            )} 
        </div>
    </nav>
  )
}

export default Nav