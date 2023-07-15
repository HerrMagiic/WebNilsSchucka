import React, { CSSProperties } from "react";
import Image from 'next/image'

export default function Page(props: {img: string, imgbackground: React.CSSProperties, title: string, description: string, link: string})  {
    const {img, imgbackground, title, description, link} = props;

    return (
        <div className="rounded-3xl mb-3 w-5/12">
            <a className="flex" href={link} target="_blank">
                <div className="p-3 rounded-l-3xl pr-2" style={imgbackground}>
                    <Image 
                        src={img} 
                        className=""
                        width={50}
                        height={50}
                        alt={title} />
                </div>
                <div className="bg-sozialmedia-50 p-3 rounded-r-3xl transition ease-out duration-600
                                hover:ease-in hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-500  ">
                    <h2 className="decoration-dgrey-800">{title}</h2>
                    <p className="decoration-dgrey-800">{description}</p>
                </div>
            </a>
        </div>
    );
}
