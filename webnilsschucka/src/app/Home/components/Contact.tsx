import { Anton } from 'next/font/google'
import '../styles/home.css';
import React from "react";
import Image from 'next/image'


const anton = Anton({ 
    weight: '400', 
    subsets: ['latin'] 
});

export default function Page(props: {img: string, imgbackground: React.CSSProperties, title: string, description: string, link: string})  {
    const {img, imgbackground, title, description, link} = props;

    return (
        <div className="rounded-3xl mb-3 w-[100%]">
            <a className="flex" href={link} target="_blank">
                <div className="p-3 rounded-l-3xl pr-2 w-70 flex " style={imgbackground}>
                    <Image 
                        src={img} 
                        width={50}
                        height={50}
                        alt={title} />
                </div>
                <div className="text-sm contact-hovering w-200 p-3 rounded-r-3xl w-[100%] ">
                    <p className="contact-header font-bold tracking-widest">{title}</p>
                    <p className="pt-1 text-xs text-slate-300">{description}</p>
                </div>
            </a>
        </div>
    );
}
