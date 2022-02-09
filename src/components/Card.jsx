import styled from "styled-components";

const Wrapper = styled.article`
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    background-color: var(--colors-el);
    cursor: pointer;
    overflow: hidden;
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    //box-shadow: var(--shadow);
`;

const CardBody = styled.div`
    padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;
    font-size: var(--fs-sm);
`;

const CardListItem = styled.li`
    line-height: 1.5rem;
    font-weight: var(--fw-light);

    & b {
        font-weight: var(--fw-bold);
    }
`;

export const Card = ({ img, name, info, onClick }) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el) => (
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    )
};