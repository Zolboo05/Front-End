import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeOne from "./components/pages/home-1";
import HomeTwo from "./components/pages/home-2";
import HomeThree from "./components/pages/home-3";
import HomeFour from "./components/pages/home-4";
import AboutUs from "./components/pages/about-us";
import Podcast from "./components/pages/podcast";
import ContactUs from "./components/pages/contact-us";
import Shop from "./components/pages/shop";
import Teacher from "./components/pages/teacher";
import TeacherDetail from "./components/pages/teacher_details";
import ProfileDetail from "./components/pages/profile_details";
import Blog from "./components/pages/blog";
import BlogSingle from "./components/pages/blog_single";
import Course from "./components/pages/course";
import CourseDetail from "./components/pages/course_detail";
import FAQ from "./components/pages/faq";
import Checkout from "./components/pages/checkout";
import Certificate from "./components/pages/certificate";
import Preloader from "./components/layouts/preloader";
import NotFound from "./components/pages/404";
import Test from "./components/pages/test";
import Book from "./components/pages/book";
import AddPage from "./components/pages/add";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import authReducer from "./store/reducers/auth";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);

const App = () => {
  return (
    <Router>
      <Preloader />
      <Switch>
        <Route path="/" exact component={HomeOne} />
        <Route path="/home-2" exact component={HomeTwo} />
        <Route path="/home-3" exact component={HomeThree} />
        <Route path="/home-4" component={HomeFour} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/podcast" component={Podcast} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/shop" component={Shop} />
        <Route path="/teacher" component={Teacher} />
        <Route path="/profile" component={ProfileDetail} />
        <Route path="/teacher-details" component={TeacherDetail} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-single" component={BlogSingle} />
        <Route path="/course" component={Course} />
        <Route
          exact
          path="/course-details/:id"
          render={(props) => <CourseDetail {...props} />}
        />
        <Route exact path="/test/:id" render={(props) => <Test {...props} />} />
        <Route exact path="/book/:id" render={(props) => <Book {...props} />} />
        <Route path="/course" component={Course} />
        <Route path="/faq" component={FAQ} />
        <Route path="/checkout" component={Checkout} />
        <Route
          path="/certification/1"
          component={(props) => (
            <Certificate {...props} key={props.match.params.id} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
