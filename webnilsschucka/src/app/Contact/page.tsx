import React from "react";
import Contact from "./components/Contact";
import twitter from "./img/twitter-white.svg";
import github from "./img/github-white.svg";
import linkedin from "./img/linkedin.svg";
import mail from "./img/email-white.svg";
import instagram from "./img/instagram-white.svg";

export default function Page()  {
    return (
        <div className="">
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
                description="My GitHub" 
                link="https://github.com/HerrMagiic"/>
            <Contact 
                img={twitter} 
                imgbackground={{background: "#1d9bf0"}}
                title="Twitter" 
                description="My Twitter " 
                link="https://twitter.com/HerrMagiic"/>
            <Contact 
                img={instagram} 
                imgbackground={{background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}}
                title="Intagram" 
                description="My Instagram" 
                link="https://www.instagram.com/herrmagic"/>

        </div>
    )
}
