import { createBrowserRouter, Navigate } from "react-router-dom";
import PageLayout from "./PageLayout.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
  	{
		path: "/",
		element: <PageLayout />,
		children: [
			{ index: true, element: <Navigate to="/about" replace /> }, 
			{ path: "about", element: <About /> },
			{ path: "projects", element: <Projects /> },
			{path: "education", element: <Education/>},
			
		],
  	},
	{path: "*", element: <NotFound/>}
]);

export default router;
