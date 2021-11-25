import { DayWeek } from '../styles/globalStyles.js';
import { useState } from 'react';

export default function Day({ day, index, selectedDays, setSelectedDays }) {
  const [classSelectedDays, setClassSelectedDays] = useState(false);

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
