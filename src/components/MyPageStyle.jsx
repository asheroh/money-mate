import styled from 'styled-components';
import { bgColor, primaryBoldColor, primaryColor } from '../../GlobalStyle';

export const MyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// ---------------------------------------------------------
export const MyPageHeaderSection = styled.section`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid black;
`;

export const MyPageProfileSection = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media all and (min-width: 1200px) {
    width: 15%;
  }
`;

export const MyPageProfileBox = styled.section`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  background-image: url(${(props) => props.defaultProfile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
  @media all and (max-width: 620px) {
    width: 75px;
    height: 75px;
  }
`;

export const MyPageProfileInput = styled.label`
  width: 60px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${primaryColor};
  border-radius: 10px;
  background-color: transparent;
  color: ${primaryColor};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${bgColor};
    background-color: ${primaryColor};
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const MyPageRightSection = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s;
  @media all and (max-width: 620px) {
  }
  @media all and (min-width: 1200px) {
    width: 85%;
  }
`;

export const MyPageInfoBox = styled.section`
  height: 100%;
  height: 18%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyPageInfo = styled.h1`
  width: calc(100% - 200px);
  height: 100%;
  display: flex;
  align-items: center;
  font-family: 'GmarketSansTTFBold';
`;

export const MyPageThemeToggle = styled.section`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${primaryColor};
  border-radius: 25px;
  cursor: pointer;
`;

export const MypageThemeLight = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid ${primaryBoldColor};
  border-radius: 25px;
  background-color: ${bgColor};
  color: ${primaryBoldColor};
  cursor: pointer;
`;

export const MypageThemeDark = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid ${primaryBoldColor};
  border-radius: 25px;
  background-color: ${primaryBoldColor};
  color: ${bgColor};
`;

export const MyPageCheckList = styled.section`
  width: 100%;
  height: 80%;
  padding: 10px;
  font-size: 12px;
  border: 1px solid black;
`;

// ---------------------------------------------------------
export const MyPageContentSection = styled.section`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid black;
`;

export const MyPageCategoryBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyPageCategoryInput = styled.input`
  width: calc(98% - 80px);
  height: 40px;
  border: 1px solid ${primaryColor};
  border-radius: 10px;
  padding: 5px;
  font-family: 'GmarketSansTTFLight';
  &:focus {
    border: 2px solid ${primaryBoldColor};
    outline: none;
  }
`;

export const MyPageCategoryInputButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${primaryColor};
  color: ${bgColor};
`;

export const MyPageCategorySection = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 30px;
  padding: 15px;
  border: 1px solid black;
  overflow-y: auto;
`;

export const MyPageCategoryButton = styled.button`
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${primaryColor};
  color: ${bgColor};
  @media all and (max-width: 650px) {
    width: 200px;
  }
`;
