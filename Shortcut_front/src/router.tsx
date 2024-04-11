import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import QuestionPage from "./pages/QuestionPage";
import EndingPage from "./pages/EndingPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/question", element: <QuestionPage /> },
  { path: "/result", element: <ResultPage /> },
  { path: "/ending", element: <EndingPage /> },
]);

export default router;
