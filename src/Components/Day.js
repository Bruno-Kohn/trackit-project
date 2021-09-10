import styled from "styled-components";
import { useState } from "react";

export default function Day({ day, index, selectedDays, setSelectedDays }) {
  const [classSelectedDays, setClassSelectedDays] = useState(false);

  function toSelectDay(index) {
    if (selectedDays.includes(index)) {
      const daysArr = selectedDays.filter((i, id) => {
        return selectedDays.indexOf(index) !== id;
      });
      setClassSelectedDays(!classSelectedDays);
      setSelectedDays(daysArr);
      console.log(daysArr);
    } else {
      setClassSelectedDays(!classSelectedDays);
      setSelectedDays([...selectedDays, index]);
      console.log([...selectedDays, index]);
    }
  }
  return (
    <DayWeek onClick={() => toSelectDay(index)} mainClass={classSelectedDays}>
      {day}
    </DayWeek>
  );
}

//--------- Styled-Components----------

const DayWeek = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.mainClass ? "#cfcfcf" : "#ffffff")};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.mainClass ? "#fff" : "#dbdbdb")};
  font-size: 20px;
`;
