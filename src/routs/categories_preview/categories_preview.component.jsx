import { Fragment } from "react"
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../store/categories/category.selector";
import Spinner from '../../components/spinner/spinner.component';

const CategoreisPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoaging = useSelector(selectIsCategoriesLoading)
    return(
        <Fragment>
            {
                isLoaging ? (<Spinner />):(
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                }))
            }
        </Fragment>
    )
}

export default CategoreisPreview;