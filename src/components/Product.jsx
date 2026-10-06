function Product({title,price,image,des,soldOut}) {
    return (
        <div className="product">
            <img
                className={soldOut ? "SoldOut" : ""}
                src={image}
                alt="Adobe After Effects"
            />

            <div className="product-info">
                <h2>{title}</h2>

                <p>
                    {des}
                </p>

                <span>{soldOut ? "Sold Out" : `${price}$`}</span>
            </div>
        </div>
    )
}
export default Product