import Slider from "../layouts/slider";
import SearchCourse from "../layouts/search_course";
import PopularCourse from "../layouts/popular_course";
import PopularNews from "../layouts/popular_news";
import AboutUs from "../layouts/about_us";
import WhyChooseUs from "../layouts/why_choose_us";
import LatestNews from "../layouts/latest_news";
import Sponsor from "../layouts/sponsor";
import BestCourse from "../layouts/best_course";
import CourseTeacher from "../layouts/course_teacher";
import BestProduct from "../layouts/best_product";
import FAQ from "../layouts/faq";
import CourseCategory from "../layouts/course_category";
import ContactArea from "../layouts/contact_area";
import Footer from "../layouts/footer";
import React from "react";

export default [
  <Slider />,
  <SearchCourse />,
  <CourseCategory />,
  <PopularCourse />,
  <BestCourse GrayBg={true} />,
  <PopularNews />,
  <CourseTeacher />,
  <BestProduct />,
  <Sponsor
    SponsorClass={"sponsor-section sponsor-1"}
    SponsorTitle={true}
    SponsorNav={true}
  />,
  // <AboutUs />,
  // <WhyChooseUs />,
  // <LatestNews />,

  // <FAQ />,

  // <ContactArea />,
  <Footer />,
];
