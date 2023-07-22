import React from "react";
import Contact from "./components/Contact";

import twitter from "./img/twitter.svg";
import github from "./img/github.svg";
import linkedin from "./img/linkedin.svg";
import mail from "./img/email.svg";
import instagram from "./img/instagram.svg";

export default function Page()  {
    return (
        <div className="m-auto w-[80%] mt-[30%]">
            <h1 className="text-4xl font-bold text-center mb-10 ">Nils Schucka</h1>
            <Contact
                img={mail} 
                imgbackground={{background: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)"}}
                title="E-Mail" 
                description="nils@schucka.de" 
                link="mailto:nils@schucka.de"
                />
            <Contact 
                img={github} 
                imgbackground={{background: "#010409"}}
                title="Github" 
                description="HerrMagiic" 
                link="https://github.com/HerrMagiic"/>
            <Contact 
                img={linkedin} 
                imgbackground={{background: "#0a66c2"}}
                title="LinkedIn" 
                description="Nils Schucka" 
                link="https://www.linkedin.com/in/nils-schucka-9b53861ab/"/>
            <Contact 
                img={twitter} 
                imgbackground={{background: "#1d9bf0"}}
                title="Twitter" 
                description="HerrMagiic " 
                link="https://twitter.com/HerrMagiic"/>
            <Contact 
                img={instagram} 
                imgbackground={{background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}}
                title="Intagram" 
                description="HerrMagic" 
                link="https://www.instagram.com/herrmagic"/>
        </div>
    )
}
