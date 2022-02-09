import styled from "styled-components";
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import { Container } from "./Container";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-el);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(NavLink).attrs({
    to: '/',
})`
    font-size: var(--fs-sm);
    color: var(--colors-text);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    font-size: var(--fs-sm);
    font-weight: var(--fw-light);
    cursor: pointer;
    color: var(--colors-text);
    text-transform: capitalize;
`;

export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where in the world ?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        { theme === 'light' ? (
                            <MdOutlineDarkMode />
                        ):(
                            <MdDarkMode />
                        )}{''}
                        <span style={{marginLeft:'0.4rem'}}> {theme} Theme </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}; 