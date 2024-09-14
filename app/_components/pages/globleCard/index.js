import GlobleCard from "./GlobleCard";

function DetailCard() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <GlobleCard />
                <GlobleCard />
                <GlobleCard />
                <GlobleCard />
            </div>
        </div>
    )
}

export default DetailCard;