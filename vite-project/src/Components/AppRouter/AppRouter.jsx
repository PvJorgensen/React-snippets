import { Route, Routes } from "react-router-dom"

import { Home } from "../../Pages/Home/Home"
import { Loader } from "../../Pages/Loader/Loader"
import { PageNotFound } from "../../Pages/PageNotFound/PageNotFound"
export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path="/Loader" element={<Loader />}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
  )
}
