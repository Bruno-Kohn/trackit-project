import styled from "styled-components";
import { useState } from "react";
import Day from "./Day";

export default function Days() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [classSelectedDays, setClassSelectedDays] = useState(false);

  const day = ["D", "S", "T", "Q", "Q", "S", "S"];

  function toSelectDay(index) {
    const daysArr = selectedDays.find((i, id) => id === index);
    console.log(daysArr);
    setClassSelectedDays(true);
    setSelectedDays([...selectedDays, index]);
    console.log(selectedDays);
  }
  return (
    <DaysWeek>
      <Day day={day} classSelectedDays={classSelectedDays} toSelectDay={toSelectDay}/>
    </DaysWeek>
  );
}

//--------- Styled-Components----------

const DaysWeek = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5px;
  display: flex;
`;


