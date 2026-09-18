import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
        <img 
            src={props.image}
            height={props.size}
            width={props.size}>
        </img>
        <h3 className="product-name">{props.name}</h3>
        <p className="description">{props.description}</p>
        <p className="price">{props.price}</p>
    </div>
  );
}

export default ProductCard;