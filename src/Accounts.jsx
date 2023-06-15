import {
  AccountsBtnSearch,
  AccountsContHeader,
  AccountsContainer,
  AccountsGroupFromTo,
  AccountsSorting,
  AccountsTitle,
  AccountsContBody,
  AccountsTable,
  AccountsAmountColorIncome,
  AccountsAmountColorSpending,
  SideNavBar,
  NavItem1,
  NavItem2,
  NavItem3,
  SideNavBarButton,
  NavHeader,
  FirstNavigator,
  SecondNavigator,
  ThirdNavigator,
  NavNewsSection,
  NavNewsHeader,
  AccountsSection,
  AccountsTableHeadTh,
  AccountsTableBodyTd,
} from './components/AccountsStyle';
import DatePicker from './components/Accounts/DatePickers';
import FormDialog from './components/Accounts/FormDialog';

import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewsList from './components/Accounts/NewsList';
import Cont from './components/Accounts/Cont';

const Accounts = () => {
  // 변수 관리-------------------------------------
  const navigate = useNavigate();
  const userName = localStorage.getItem('username');

  // News API-------------------------------------
  const API_KEY = '06288e3f326849a5a788730118439d3c';
  // API_KEY 임시 처리, 나중에 숨길 것
  const [newsData, setNewsData] = useState([]);
  const fetchData = async () => {
    try {
      const apiData = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );
      setNewsData(apiData.data.articles);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const newsList = newsData?.map((news, idx) => {
    return (
      <React.Fragment key={idx}>
        <NewsList newsData={newsData} id={idx} />
      </React.Fragment>
    );
  });

  // Navigation 관리--------------------------------
  const [navToggle, setNavToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const handleNavButton = () => setNavToggle(!navToggle);
  const handleNavigator0 = useCallback(() => setCurrentPage(0), [currentPage]);
  const handleNavigator1 = useCallback(() => setCurrentPage(1), [currentPage]);
  const handleNavigator2 = useCallback(() => setCurrentPage(2), [currentPage]);
  const handleNavToHome = () => navigate('/guide');

  


  return (
    <>
      <AccountsContainer>
        {/* Navigation Bar----------------------------------- */}
        <SideNavBarButton onClick={handleNavButton} navToggle={navToggle}>
          <NavItem1>{navToggle ? '' : `>`} </NavItem1>
          <NavItem2>{navToggle ? '' : `>`}</NavItem2>
          <NavItem3>{navToggle ? 'X' : `>`}</NavItem3>
        </SideNavBarButton>
        <SideNavBar navToggle={navToggle}>
          <NavHeader onClick={handleNavToHome}>Money-mate</NavHeader>
          <FirstNavigator currentPage={currentPage} onClick={handleNavigator0}>
            가계부
          </FirstNavigator>
          <SecondNavigator currentPage={currentPage} onClick={handleNavigator1}>
            달력
          </SecondNavigator>
          <ThirdNavigator currentPage={currentPage} onClick={handleNavigator2}>
            차트
          </ThirdNavigator>

          <NavNewsSection>
            <NavNewsHeader>WORLDWIDE HOT NEWS</NavNewsHeader>
            {newsList}
          </NavNewsSection>
        </SideNavBar>
        <AccountsSection navToggle={navToggle}>
          {currentPage === 0
            ? <Cont />
            : currentPage === 1
            ? '달력 페이지'
            : currentPage === 2
            ? '차트 페이지'
            : ''}
        </AccountsSection>
        {/* <AccountsContHeader />
        <AccountsContBody /> */}
        
      </AccountsContainer>
    </>
  );
};

export default Accounts;
