import { DayWeek } from '../styles/globalStyles.js';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

export default function Day({ day, index, selectedDays, setSelectedDays }) {
  const [classSelectedDays, setClassSelectedDays] = useState(false);

  useEffect(
    () => {
      if (selectedDays.includes(index)) {
        setClassSelectedDays(true);
      } else {
        setClassSelectedDays(false);
      }
    },
    // eslint-disable-next-line
    [selectedDays.length]
  );

  function toSelectDay(index) {
    if (selectedDays.includes(index)) {
      const daysArr = selectedDays.filter((i, id) => {
        return selectedDays.indexOf(index) !== id;
      });
      setClassSelectedDays(!classSelectedDays);
      setSelectedDays(daysArr);
    } else {
      setClassSelectedDays(!classSelectedDays);
      setSelectedDays([...selectedDays, index]);
    }
  }
  return (
    <DayWeek onClick={() => toSelectDay(index)} mainClass={classSelectedDays}>
      {day}
    </DayWeek>
  );
}
