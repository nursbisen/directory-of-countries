import styled from "styled-components";

export const Button = styled.button`
    padding: 0 1rem;
    border: none;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    background-color: var(--colors-el);
    line-height: 2.5em;
    color: var(--colors-text);
    font-family: var(--family);

    display: flex;
    align-items: center;
    gap: 0.75rem;

    cursor: pointer;
    transition: .2s;

    &:hover {
        background-color: var(--colors-bg);
    }
`;