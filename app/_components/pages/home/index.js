import BannerSection from "./banner";
import ExploreSection from "./explore";
import FavoriteCollection from "./favoriteCollection";
import LatestCollection from "./latestCollection";
import NewProductsSection from "./newProducts";

export default function HomePage() {
    return (
        <div className="">
            <BannerSection />
            <ExploreSection />
            <FavoriteCollection />
            {/* <NewProductsSection /> */}
            <LatestCollection />
        </div>
    )
}