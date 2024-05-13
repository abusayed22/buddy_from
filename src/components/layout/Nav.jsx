'use client'


import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";
import {IoMenu} from "react-icons/io5";
import {MdCancel} from "react-icons/md";
import {usePathname} from "next/navigation";
// import { Link } from "react-router-dom";

// Import Images
// import logodark from "../../../assets/images/logo-dark.png";
// import logolight from "../../../assets/images/logo-light.png";

const Nav = () => {
    const path = usePathname()
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    }

    const [activeLink, setActiveLink] = useState();
    useEffect(() => {
        const activation = (event) => {
            const target = event.target;
            if (target) {
                target.classList.add('active');
                setActiveLink(target);
                if (activeLink && activeLink !== target) {
                    activeLink.classList.remove('active');
                }
            }
        };
        const defaultLink = document.querySelector('.navbar li.a.active');
        if (defaultLink) {
            defaultLink?.classList.add("active")
            setActiveLink(defaultLink)
        }
        const links = document.querySelectorAll('.navbar a');
        links.forEach((link) => {
            link.addEventListener('click', activation);
        });
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', activation);
            });
        };
    }, [activeLink]);

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed bg-secondary" + navClass} id="navbar">
                <Container>
                    <a className="navbar-brand" href="/index">
                        <p className="text-info bx-font-family la-font-awesome-logo-full fw-bold">Buddys_Form</p>
                        {/*<img src="" className="card-logo card-logo-dark" alt="logo dark" height="17" />*/}
                        {/*<img src="" className="card-logo card-logo-light" alt="logo light" height="17" />*/}
                    </a>

                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                                   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                   aria-expanded="false" aria-label="Toggle navigation">
                        {isOpenMenu? (<MdCancel />): (<IoMenu />)}
                    </NavbarToggler>

                    <Collapse
                        isOpen={isOpenMenu}
                        className="navbar-collapse "
                        id="navbarSupportedContent"
                    >
                        <Scrollspy
                            offset={18}
                            items={[
                                "Home",
                                "Dashboard",
                                "History",
                                "login",
                                "register",
                            ]}
                            currentClassName="active"
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className={`nav-item text-light ${path=== '/' && "fw-bold"} `}>
                                <NavLink className="text-light" href="/">Home</NavLink>
                            </li>
                            <li className={`nav-item text-light ${path=== '/dashboard' && "fw-bold"} text-light`}>
                                <NavLink className="text-light" href="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className={`nav-item text-light ${path=== '/history' && "fw-bold"} .text-light`}>
                                <NavLink className="text-light" href="/history">Expense-History</NavLink>
                            </li>

                        </Scrollspy>

                        <div className="md:border p-2 rounded-3 ">
                            <a href="/login" className="text-light btn btn-link fw-medium text-decoration-none">Sign
                                in</a>
                            <a href="/register" className="btn btn-primary text-light">Sign Up</a>
                        </div>
                    </Collapse>
                </Container>
            </nav>
        </React.Fragment>
    );
};

export default Nav;