import styled from "styled-components";
import Day from "./Day";

export default function Days({selectedDays, setSelectedDays}) {
  
  const day = ["D", "S", "T", "Q", "Q", "S", "S"];


  return (
    <DaysWeek>
      {day.map((i, index) => <Day day={i} index={index} selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>)}
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


