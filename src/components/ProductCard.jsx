import '../styles/ProductCard.css'
export default function ProductCard(props){
    return(
        <div className={props.loading ? "prodLoading" : "prodcard"}>
            <div className="img-section">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="productText">
                
                <h2>{props.loading? "Loading...": props.name}</h2>
                <hr />
                <p className="desc">{props.loading? "description" : props.desc}</p>
                <p className="price">{props.loading? "MWK 0,000.00" : props.price}</p>
            </div>
            <button className="add">{props.loading? "loading...": "Add To Cart"}</button>
        </div>
    )
}