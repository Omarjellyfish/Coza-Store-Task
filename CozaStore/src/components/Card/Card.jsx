import './Card.css'
export default function Card({img,cat,name,price}){
    return(
        <>
            <div className="card">
                <div className="product-image">
                    <img src={img} alt={name} />
                    <button className="quick-view">Quick View</button>
                </div>
                <div className='description'>
                    <div className="product">
                        <p className="product-name">
                            {name}
                        </p>
                        <i className="favorite" id='fav'/>
                    </div>
                    <p className="price">${price}</p>
                </div>
            </div>
        </>
    )
}