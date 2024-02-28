import React from "react";
import { Card, CardTitle, CardBody ,CardImage, CardSubtitle} from "@progress/kendo-react-layout";

function Dashboard() {
  const welcome = "Hi Jerry, Good Afternoon.";
  const courses = "Courses Assigned For You";
  const subtitle1 = "Weekly Goals";
  const subtitle2 = "Weekly Meetings";
  const subtitle3 = "Pending Task";
  const subtitle4 = "Pending Leeve";
  const subcontent1 = "Need To Finish : 03";
  const subcontent2 = "Total Meetings : 07";
  const subcontent3 = "Pending Tasks : 01";
  const subcontent4 = "Pending Leeves : 12";
  const imgtitile1 = "Hands on Introduction: React";
  const imgtitile2 = "Javascript: Beginers to Advance";
  const imgtitile3 = "Css: Advance Training";
  const tutor = "By: Jeryluxshigan";
  
  return (
    <div className="main-card">
      <div className="welcome"> {welcome} </div>
      <Card className="section1">
        <Card className="sub-card">
          <CardTitle className="sub-titles">{subtitle1}</CardTitle>
          <CardBody className="sub-content">{subcontent1}</CardBody>
        </Card>
        <Card className="sub-card">
          <CardTitle className="sub-titles">{subtitle2}</CardTitle>
          <CardBody className="sub-content">{subcontent2}</CardBody>
        </Card>
        <Card className="sub-card">
          <CardTitle className="sub-titles">{subtitle3}</CardTitle>
          <CardBody className="sub-content">{subcontent3}</CardBody>
        </Card>
        <Card className="sub-card">
          <CardTitle className="sub-titles">{subtitle4}</CardTitle>
          <CardBody className="sub-content">{subcontent4}</CardBody>
        </Card>
      </Card>
      <div className="welcome"> {courses} </div>
      <Card className="section2">
        <Card className="sub-card2">
            <CardImage className="img1" src="https://i.ytimg.com/vi/B6NW5g0h7PA/maxresdefault.jpg" />
            <CardTitle className="sub-titles2"> {imgtitile1}</CardTitle>
            <CardSubtitle  className="tutors"> {tutor} </CardSubtitle>
        </Card>
        <Card className="sub-card2">
            <CardImage className="img1" src="https://i.ytimg.com/vi/mwQ6oJ28E8M/maxresdefault.jpg" />
            <CardTitle className="sub-titles2"> {imgtitile2}</CardTitle>
            <CardSubtitle  className="tutors"> {tutor} </CardSubtitle>
        </Card>
        <Card className="sub-card2">
            <CardImage className="img1" src="https://i.ytimg.com/vi/mwZtq-fv6TI/maxresdefault.jpg" />
            <CardTitle className="sub-titles2"> {imgtitile3}</CardTitle>
            <CardSubtitle  className="tutors"> {tutor} </CardSubtitle>
        </Card>
      </Card>
      <Card className="section2">
        <Card className="sub-card2">
            <CardImage className="img1" src="https://i.ytimg.com/vi/-V1pGwL_VEo/maxresdefault.jpg" />
            <CardTitle className="sub-titles2"> {imgtitile1}</CardTitle>
            <CardSubtitle  className="tutors"> {tutor} </CardSubtitle>
        </Card>
        <Card className="sub-card2">
            <CardImage className="img1" src="https://i.ytimg.com/vi/AZXDRTbOVXQ/maxresdefault.jpg" />
            <CardTitle className="sub-titles2"> {imgtitile2}</CardTitle>
            <CardSubtitle  className="tutors"> {tutor} </CardSubtitle>
        </Card>
        <Card className="sub-card2">
            <CardImage className="img1" src="https://i.ytimg.com/vi/C7VmIDxJLTk/maxresdefault.jpg" />
            <CardTitle className="sub-titles2"> {imgtitile3}</CardTitle>
            <CardSubtitle  className="tutors"> {tutor} </CardSubtitle>
        </Card>
      </Card>
    </div>
  );
}

export default Dashboard;
