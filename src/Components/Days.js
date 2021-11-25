import { DaysWeek } from '../styles/globalStyles.js';
import Day from './Day';

export default function Days({ selectedDays, setSelectedDays }) {
  const day = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <DaysWeek>
      {day.map((i, index) => (
        <Day
          day={i}
          index={index}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          key={index}
        />
      ))}
    </DaysWeek>
  );
}
