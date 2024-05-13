import React from 'react';
import Nav from "@/components/layout/Nav";

const GenaralLayout = ({children}) => {
    return (
        <>
            <Nav />
            {children}
        </>
    );
};

export default GenaralLayout;