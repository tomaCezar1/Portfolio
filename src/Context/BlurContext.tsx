import React, { useState } from 'react';

export const BlurContext = React.createContext(null);

export default function BlurProvider({ children }): JSX.Element {
    const [hovered, setHovered] = useState(false);
    const [noBlur, setNoBlur] = useState(true);

    const mouseEnter = () => {
        setHovered(!hovered);
    };

    const mouseLeave = () => {
        setHovered(false);
        setNoBlur(false);
    };

    return (
        <BlurContext.Provider value={{ hovered, noBlur, mouseEnter, mouseLeave }}>
            {children}
        </BlurContext.Provider>
    );
}
