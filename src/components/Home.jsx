import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import practitionersData from "../utils/practitionersData";

import { useEffect } from "react";
import MyCarePortfolio from "./MyCarePortfolio";
import AddMember from "./AddMember";
import Provider from "./Provider";
import ViewDetails from "./ViewDetails";
import MyEarnings from "./MyEarnings";
import MyProfile from "./MyProfile";
import ChangePassword from "./ChangePassword";
import SearchResults from "./SearchResults";
import ViewMemberDetails from "./ViewMemberDetails";
import EditMember from "./EditMember";
import UpdatePlan from "./UpdatePlan";
import ChangeLanguage from "./ChangeLanguage";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("My Care Portfolio");
  const [displayedComponent, setDisplayedComponent] =
    useState("MyCarePortfolio");
  const [appBarTitle, setAppBarTitle] = useState("My Care Portfolio");
  const [selectedPractitioner, setSelectedPractitioner] = useState(null);
  const [historyStack, setHistoryStack] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [previousComponent, setPreviousComponent] = useState("MyCarePortfolio");

  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const jsonData = localStorage.getItem("userData");
  //   if (jsonData) {
  //     const userDataObject = JSON.parse(jsonData);
  //     setUserData(userDataObject);
  //   }
  // }, []);

  // console.log(userData);

  const handleSearch = (searchTerm) => {
    // Perform search logic here
    // Assuming data is an array of objects with a 'name' property to search against
    const updatedResults = practitionersData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(updatedResults);
  };

  const toggleComponent = (component, title, practitioner) => {
    setSelectedPractitioner(practitioner);
    if (
      component === "AddMember" ||
      component === "MakeClaim" ||
      component === "ViewDetails" ||
      component === "ChangePassword" ||
      component === "EditMember"
    ) {
      setHistoryStack([...historyStack, [selectedCategory, appBarTitle]]);
    } else {
      // Only update history stack if navigating forward
      if (
        historyStack.length > 0 &&
        historyStack[historyStack.length - 1][0] !== selectedCategory
      ) {
        setHistoryStack([...historyStack, [selectedCategory, appBarTitle]]);
      }
    }
    setDisplayedComponent(component);
    if (component !== "SearchResults") {
      setPreviousComponent(component);
    }
    console.log(previousComponent);
    setAppBarTitle(title);
  };

  const componentMap = {
    MyCarePortfolio: (
      <MyCarePortfolio
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
        // userData={userData}
      />
    ),
    AddMember: (
      <AddMember
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    // PreventiveExams: (
    //   <PreventiveExams
    //     toggleComponent={toggleComponent}
    //     setDisplayedComponent={setDisplayedComponent}
    //   />
    // ),
    // MakeClaim: (
    //   <MakeClaim
    //     toggleComponent={toggleComponent}
    //     setDisplayedComponent={setDisplayedComponent}
    //   />
    // ),
    ChangeLanguage: (
      <ChangeLanguage
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    Provider: (
      <Provider
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    MyEarnings: (
      <MyEarnings
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    ViewDetails: (
      <ViewDetails
        practitioner={selectedPractitioner}
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    SearchResults: (
      <SearchResults
        practitioners={searchResults}
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
        previousComponent={previousComponent}
      />
    ),
    MyProfile: (
      <MyProfile
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
        // userData={userData}
      />
    ),
    ChangePassword: (
      <ChangePassword
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    ViewMemberDetails: (
      <ViewMemberDetails
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    EditMember: (
      <EditMember
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    UpdatePlan: (
      <UpdatePlan
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    // Add other components as needed
  };

  return (
    <Sidebar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      appBarTitle={appBarTitle}
      setAppBarTitle={setAppBarTitle}
      displayedComponent={displayedComponent} // Pass displayedComponent as prop
      toggleComponent={toggleComponent}
      historyStack={historyStack}
      setHistoryStack={setHistoryStack}
      setDisplayedComponent={setDisplayedComponent} // Pass setDisplayedComponent
      onSearch={handleSearch}
    >
      <Box width="100%">{componentMap[displayedComponent]}</Box>
    </Sidebar>
  );
};

export default Home;
