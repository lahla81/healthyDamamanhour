import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CategoreisPreview from "../categories_preview/categories_preview.component";
import CategoryPage from "../../routs/category-page/category-page.component";

import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(fetchCategoriesStart())
    },[dispatch])
    return(
        <Routes>
            <Route index element={<CategoreisPreview />} />
            <Route path=":category" element={<CategoryPage />} />
        </Routes>
    )
}

export default Shop;