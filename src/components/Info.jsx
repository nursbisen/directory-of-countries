import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { filterByCode } from "../config";

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media(min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        gap: 5rem;
        align-items: center;
    }

    @media(min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }

`;

const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media(min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    & > b {
        font-weight: var(--fw-bold);
    };

    @media(min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }

`;

const TagGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const Tag = styled.span`
    padding: 0 1rem;
    line-height: 1.5;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    background-color: var(--colors-el);
    cursor: pointer;
`;

export const Info = (props) => {
    const {
        name,
        flag,
        nativeName,
        population,
        region,
        subregion,
        capital,
        area,
        timezones,
        currencies,
        languages,
        borders = [],
    } = props;

    const navigate =useNavigate();

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders.length)
            axios
                .get(filterByCode(borders))
                .then(({ data }) => setNeighbors(data.map(c => c.name)))
    }, [borders]);

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name} />
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name: </b>{nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population: </b>{population.toLocaleString()}
                        </ListItem>
                        <ListItem>
                            <b>Region: </b>{region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region: </b>{subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital: </b>{capital}
                        </ListItem>
                        <ListItem>
                            <b>Area: </b>{area.toLocaleString()} km<sup>2</sup>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Languages: </b>
                            {languages.map(l => (
                                <span key={l.name}>{l.name} </span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Timezones: </b>
                            {timezones.map(t => (
                                <span key={t}>{t} </span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Currency: </b>
                            {currencies.map(c => (
                                <span key={c.code}>{c.name} ({c.symbol}) </span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries: </b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbors.map(n => (
                                <Tag key={n} onClick={()=>navigate(`/country/${n}`)}>{n}</Tag>
                            ))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
};