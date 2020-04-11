import React from "react";
import { Switch, Route } from "react-router-dom"; //use HashRouter if there is errors on static gh-pages
import ExpenseTracker from "../ExpenseTracker/ExpenseTracker";
import SignalRStream from "../SignalrStream/Stream";
import ExampleHighlighter from "../SyntaxHighlighter/ExampleHighlighter";
import GithubFeaturedList from "../SyntaxHighlighter/GithubFeatured/GithubFeaturedList";
import HoverableTableExample from "../SyntaxHighlighter/tables/HoverableTableExample";
import DraggableExample from "../draggableComponent/DraggableExample";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={ExampleHighlighter} />
      <Route exact path="/stream" component={SignalRStream} />
      <Route exact path="/expenses" component={ExpenseTracker} />
      <Route exact path="/featured" component={GithubFeaturedList} />
      <Route exact path="/table" component={HoverableTableExample} />
      <Route exact path="/drag" component={DraggableExample} />
    </Switch>
  );
};
export default AppRouter;

//Scroll to element in view https://stackoverflow.com/questions/43441856/reactjs-how-to-scroll-to-an-element
// or https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

//Router info https://reacttraining.com/react-router/web/api/BrowserRouter (browser router /hash router (for static files) should wrap whole App.js in index.js to work properly!)
//could also use next.js routing https://nextjs.org/docs/routing/introduction

//useRef() faq --https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
