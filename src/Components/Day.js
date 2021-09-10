import styled from "styled-components";

export default function Day ({day, toSelectDay, classSelectedDays}) {
    return (
        day.map((i, index) => (
            <DayWeek onClick={() => toSelectDay(index)} mainClass={classSelectedDays}>
              {i}
            </DayWeek>
          ))
    );
}

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