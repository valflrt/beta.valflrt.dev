import TimedRouterLink from "../particles/TimedRouterLink";
import { TimedRouterLinkDefaultProps } from "../misc";

import "./NotFound.scss";

const NotFound = () => {
  document.title = "404 – valflrt.dev";

  return (
    <div className={"main"}>
      <h1 className={"fortyHundredAndFour"}>404</h1>
      <p>There's nothing here !</p>
      <TimedRouterLink
        className={() => "link"}
        to={"/"}
        {...TimedRouterLinkDefaultProps}
      >
        Back home
      </TimedRouterLink>
    </div>
  );
};

export default NotFound;
