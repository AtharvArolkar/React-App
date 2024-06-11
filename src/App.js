import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import QuestionList from "./Lisitng";
import Bank from "./OuestioBank";

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(

  //   )
  // );

  return (
    <>
      <Routes>
        <Route path="/" element={<QuestionList />} />
        <Route path=":id" element={<Bank />} />
      </Routes>
    </>
  );
}

export default App;
