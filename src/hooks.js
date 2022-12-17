import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const useFlip = (initialState = true) => {
  const [isFacingUp, setIsFacingUp] = useState(initialState);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };

  return [isFacingUp, flipCard];
};

export const useAxios = url => {
  const [responses, setResponses] = useState([]);

  const addResponseData = async (restOfUrl = '') => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setResponses(s => [...s, { ...response.data, id: uuid() }]);
  };

  return [responses, addResponseData];
};
