import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useMount from '../../hooks/useMount';
import { fetchPersonage } from '../../actions/personages';

const Personages = () => {
  const dispatch = useDispatch();

  const handleGetPersonages = useCallback(
    element => dispatch(fetchPersonage()),
    [dispatch]
  );

  useMount(async () => {
    handleGetPersonages();
  });

  return <h1>Heñño</h1>;
};

export default Personages;
