function RatingBadge({ rating }) {
    const getBadgeClass = () => {
        if (rating >= 4.5) return "good";
        if (rating >= 2.5) return "medium";
        return "bad";
    };

    return (
        <div className={`rating-badge ${getBadgeClass()}`}>
            {rating}
        </div>
    );
}

export default RatingBadge;
