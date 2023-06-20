// Calendar 페이지와 관련된 styled component
import styled from 'styled-components';
import { primaryColor, bgColor } from '../../GlobalStyle';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.primaryColor};
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: 'AppleSDGothicNeoB';
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 10px;
  position: absolute;
  top: 50px;
  left: 53px;
`;

export const CalendarButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 50px;
`;

export const CalendarContainer = styled.section`
  width: 100%;
  height: 90%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 40px;
  z-index: 0;
  @media (min-width: 1400px) {
    padding: 0 100px;
  }
`;

export const ModalStyle = {
  content: {
    width: '30%',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ` ${bgColor}`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: ` ${primaryColor}`,
    fontFamily: 'AppleSDGothicNeoB',
    border: `2px solid ${primaryColor}`,
    '@media (minWidth: 300px)': {
      width: '300px',
    },
  },
};

export const ModalForm = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 70px;
  height: 27px;
  margin: 25px;
  position: absolute;
  bottom: 25px;
  right: -5px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.bgColor};
  cursor: pointer;
`;

export const CloseButton = styled.button`
  width: 70px;
  height: 27px;
  position: absolute;
  bottom: 17px;
  right: 20px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.bgColor};
  cursor: pointer;
`;

export const ModalTitle = styled.h1`
  font-size: 20px;
  margin: 10px 0px;
`;

export const ModalList = styled.div`
  width: 80%;
  height: 80%;
`;

export const ModalListItem = styled.div`
  font-size: 17px;
  margin: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
  width: 80px;
  height: 25px;
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.bgColor};
  cursor: pointer;
`;
