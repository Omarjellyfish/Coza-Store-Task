import './Home.css'
export default function Home(){
    return(
        <>
            <div className="home-container">
                <div className="landing-page">
                    bigCardsSliding
                </div>
                <div className="categories">
                    <Cards/>
                        <CategoryCard/>

                </div>
                <div className="product-overview">
                    <Cards/>
                        <ShopCards/>
                    to shop if load more
                    <button className="load-more" id="load-more">Load More</button>
                </div>
            </div>
        </>
    )
}