import React from "react";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex m-6 p-0 gap-10 justify-center text-base font-bold">
                <li className="float-left">
                    <a href="/Home">Home</a>
                </li>
                <li className="float-left">
                    <a href="/Contact">Contact</a>
                </li>
                <li className="float-left">
                    <a href="/FAQ">FAQ</a>
                </li>
            </ul>
        </nav>
    );
}