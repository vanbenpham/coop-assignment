import React from "react";


export default function Navbar() {
    return (
        <header class="row justify-content-center">
            <h1 class="my-4">Welcome to Health Center</h1>
            <nav class="container-fluid-nav text-center bg-light navbar-expand-lg">
                <ul>
                    <li>
                        <a href="http://localhost:5000/">Register</a>
                    </li>
                    <li>
                        <a href="https://www.hamiltonhealthsciences.ca/">About us</a>
                    </li>
                    <li>
                        <a href="https://www.ipc.on.ca/privacy-individuals/your-privacy-rights/">Privacy Policy</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}