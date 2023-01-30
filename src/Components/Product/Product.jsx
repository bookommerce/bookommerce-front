import { ProductDescriptionStyle, ProductStyle } from "./ProductStyle"

const Product = ({img, name, description, price}) => {
    return (
        <ProductStyle>
            <img src={img} alt="" />
            <ProductDescriptionStyle>
                <span>{name}</span>
                <p>{description}</p>
                <p>{price.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'})}</p>
            </ProductDescriptionStyle>
        </ProductStyle>
    )
}

export default Product;