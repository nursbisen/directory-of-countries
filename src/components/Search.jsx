import styled from "styled-components";
import { MdSearch } from 'react-icons/md';

const InputContainer = styled.label`
    display: flex;
    align-items: center;
    background-color: var(--colors-el);
    padding: 1rem 2rem;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        width: 280px;
        margin-bottom: 0;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Enter country...',
})`
    margin-left: 1rem;
    border: none;
    outline: none;
    background-color: var(--colors-el);
    color: var(--color-text);
    font-family: var(--family);
    font-weight: var(--fw-normal);
    font-size: var(--fs-sm);
`;

export const Search = ({search, setSearch}) => {
    return(
        <InputContainer>
            <MdSearch />
            <Input 
                onChange={(e)=>setSearch(e.target.value)}
                value={search} />
        </InputContainer>
    )
};