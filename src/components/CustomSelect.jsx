import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            width: '200px',
            backgroundColor: 'var(--colors-el)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            border: 'none',
            padding: '0.25rem',
            height: '50px',
            boxShadow: 'var(--shadow)',
            fontFamily: 'var(--family)',
            fontWeight: 'var(--fw-normal)',
            fontSize: 'var(--fs-sm)',
            paddingLeft: '1rem'
        }),
        option: (provided, state) => ({
            ...provided,
            fontWeight: 'var(--fw-normal)',
            fontSize: 'var(--fs-sm)',
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected
                ? 'var(--colors-bg)'
                : 'var(--colors-el)'
        })
    }
})`
    & * { color: var(--colors-text) !important };

    & div[id] {
        background-color: var(--colors-el);
    }
`;