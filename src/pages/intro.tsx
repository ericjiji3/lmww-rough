import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Intro.module.css';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Intro() {
    const [scrollPos, setScrollPos] = useState(0);
    const ref1 = React.useRef<HTMLImageElement>(null);
    const ref2 = React.useRef<HTMLImageElement>(null);
    const ref3 = React.useRef<HTMLImageElement>(null);
    const ref4 = React.useRef<HTMLImageElement>(null);
    const ref5 = React.useRef<HTMLImageElement>(null);
    const ref6 = React.useRef<HTMLImageElement>(null);
    const ref7 = React.useRef<HTMLImageElement>(null);


    useEffect(()=>{
        const handleScroll = (e: Event) => {
            
            setScrollPos(scrollPos + e.deltaY);
            console.log(scrollPos);
            console.log(ref1);
            var scaleTo = scrollPos === 0 ? 0.1 : (scrollPos % 1000)/500;
            console.log(scaleTo);
            if(scrollPos < 1000){
              ref1.current?.setAttribute('style', `transform: translate(-50%, -50%) scale(${scaleTo})`);
              ref1.current?.setAttribute('style', `left: ${ref1.current?.style.left + scrollPos/10}`);
            }else if(scrollPos >= 1000 && scrollPos < 2000){
              ref1.current?.setAttribute('style', `transform: translate(-50%, -50%) scale(${scaleTo})`);
            }
            
        }

        window.addEventListener('wheel', handleScroll);

        return()=>{
            window.removeEventListener('wheel', handleScroll);
        }
    })
  return (
    <>
      <main className={styles.main}>
        <Image className={scrollPos < 1000 ? `${styles.active}` : `${styles.inactive}`}src="/images/intro/1.jpg" alt="oops" width="500" height="700" ref={scrollPos < 1000 ? ref1 : null}/>
        <Image className={scrollPos >= 1000 && scrollPos < 2000 ? `${styles.active}` : `${styles.inactive}`} src="/images/intro/2.jpg" alt="oops" width="500" height="700" ref={scrollPos >= 1000 && scrollPos < 2000 ? ref1 : null}/>
        <Image className={scrollPos >= 2000 && scrollPos < 3000 ? `${styles.active}` : `${styles.inactive}`} src="/images/intro/3.jpg" alt="oops" width="500" height="700" ref={scrollPos >= 2000 && scrollPos < 3000 ? ref1 : null}/>
        <Image className={scrollPos >= 3000 && scrollPos < 4000 ? `${styles.active}` : `${styles.inactive}`} src="/images/intro/4.jpg" alt="oops" width="500" height="700" ref={scrollPos >= 3000 && scrollPos < 4000 ? ref1 : null}/>
        <Image className={scrollPos >= 4000 && scrollPos < 5000 ? `${styles.active}` : `${styles.inactive}`} src="/images/intro/5.PNG" alt="oops" width="500" height="700" ref={scrollPos >= 4000 && scrollPos < 5000 ? ref1 : null}/>
        <Image className={scrollPos >= 5000 && scrollPos < 6000 ? `${styles.active}` : `${styles.inactive}`} src="/images/intro/6.jpg" alt="oops" width="500" height="700" ref={scrollPos >= 5000 && scrollPos < 6000 ? ref1 : null}/>
        <Image className={scrollPos >= 6000 && scrollPos < 7000 ? `${styles.active}` : `${styles.inactive}`} src="/images/intro/7.jpg" alt="oops" width="500" height="700" ref={scrollPos >= 6000 && scrollPos < 7000 ? ref1 : null}/>
      </main>
    </>
  )
}
