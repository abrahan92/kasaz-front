import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResponsiveContainer from '../shared/responsive_container';
import { getProperties } from '../../redux/actions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { properties, properties_filtered } = useSelector(
    (state) => state.propertyReducer,
  );

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  return <ResponsiveContainer rooms={properties_filtered} />;
};

export default HomeScreen;
