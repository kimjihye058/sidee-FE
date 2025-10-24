import { Route, Routes } from "react-router";
import RootPage from "../pages/root/RootPage.tsx";

export default function RootRouter() {
    return (
        <Routes>
            <Route path={"/"} element={<RootPage/>}/>
        </Routes>
    )
}