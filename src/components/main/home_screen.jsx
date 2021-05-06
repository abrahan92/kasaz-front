import React, { useState, useEffect } from 'react';
import ResponsiveContainer from '../shared/responsive_container';
import { roomService } from '../../services/room_service';

const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    roomService
      .get_rooms()
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        setRooms([]);
      });
  }, []);

  return <ResponsiveContainer rooms={rooms} />;
};

export default HomeScreen;
