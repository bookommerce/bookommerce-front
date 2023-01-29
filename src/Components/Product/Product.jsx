import { ProductDescriptionStyle, ProductQuantityStyle, ProductStyle } from "./ProductStyle"
import img1 from "../../assets/img1.png"

const Product = () => {
    return (
        <ProductStyle>
            <img src={img1} alt="" />
            <ProductDescriptionStyle>
                <span>Graystone vase</span>
                <p>A timeless ceramic vase with a tri color grey glaze.</p>
                <p>£85</p>
                <ProductQuantityStyle>
                    <span>-</span>
                    <input disabled placeholder="1" />
                    <span>+</span>
                </ProductQuantityStyle>
            </ProductDescriptionStyle>
        </ProductStyle>
    )
}

export default Product;