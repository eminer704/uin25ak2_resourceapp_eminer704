import React from "react";
import Nav from "./Nav";
import PageTitle from "./PageTitle";
import "../styles/main.scss";

function Layout({ children, title }) {
    return (
        <div className="container">
            <header>
                <h1>UIN-2025 Ressursarkiv</h1>
            </header>
            <Nav />
            {/*Viser sidens tittel dynamisk basert på "title"-prop */}
            <PageTitle title={title} />
            {/*Hovedinnholdet, der "children" representerer dynamisk innhold */}
            <main>{children}</main>
        </div>
    );
}

export default Layout;

