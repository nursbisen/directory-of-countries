import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { searchByCountry } from "../config";

export const Details = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    const onClick = () => navigate(-1);

    useEffect(() => {
        axios
            .get(searchByCountry(name))
            .then(({ data }) => setCountry(data[0]))
    }, [name]);

    return (
        <div>
            <Button onClick={onClick}>
                <MdArrowBack />
                <span>back</span>
            </Button>
            {country && (<Info {...country} />)}
        </div>
    );
};