import './App.css';
import {Settings,settingsLoader} from "./pages/Settings";
import {Main,mainLoader} from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Layout from "./component/Laiout";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>} loader={mainLoader}/>
        <Route path = 'page1' element={<Settings/>} loader={settingsLoader}/>
        <Route path = 'page1/:id' element={<Settings/>} loader={settingsLoader}/>
        <Route path = '*' element={<NotFoundPage/>}/>
    </Route>
))
function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
