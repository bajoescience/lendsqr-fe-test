import { useParams } from "react-router-dom";
import { nameToUrl, sidebarSection } from "../helper";

// import Users from "../components/Users";
import { lazy, Suspense } from "react";
const Users = lazy(() => import("../components/Users"));
const Error = lazy(() => import("../components/Error"));

// Get all the links from the sidebar section
let allLinks: string[] = [];
sidebarSection.forEach((sect) => {
  const linkName: string[] = sect.children.map((child) =>
    nameToUrl(child.name)
  );
  allLinks = allLinks.concat([...linkName]);
});

const Main = () => {
  // Fetch the current page link from the url
  const { link } = useParams<string>();

  // If url is the url for users page, render users
  if (link === "users") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    );
  }

  // If not users page, but page exists, we display contruction in progress error
  if (!link || allLinks.includes(link)) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Error linkExists />
      </Suspense>
    );
  }

  // Else we just render not available error
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Error />
      </Suspense>
    </>
  );
};

export default Main;
