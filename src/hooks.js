import React, { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const flipState = () => {
        setState(state => !state);
    }
    return [state, flipState];
};  

const useAxios = (url) => {
    const [cards, setCards] = useState([]);

    const addCard = async(urlSuffix="") => {
        // console.log(`URLSuffix: ${JSON.stringify(urlSuffix)}`);
        const fullUrl = `${url}${urlSuffix}`
        console.log(`FULL URL: ${fullUrl}`);
        const res = await axios.get(fullUrl);
        setCards(cards => [...cards, {...res.data, id: uuid()}]);
    };

    return [cards, addCard];
}

export { useFlip, useAxios };