import { FaStar } from "react-icons/fa6";

export default function CustomerSays() {
    const reviews = [
        {
            CustomerName: "Alok",
            Rating: 5,
            Review:
                "Really liked the fragrance and overall quality. The aroma is pleasant and stays for a good amount of time. Super 6 is especially nice because you get different fragrances in one box."
        },
        {
            CustomerName: "Kiran",
            Rating: 5,
            Review:
                "The fragrance is very soothing and the dhoop burns nicely without producing too much smoke. Packaging was also good. Will definitely order again."
        },
        {
            CustomerName: "Siddharth",
            Rating: 4,
            Review:
                "Good quality dhoop sticks with a nice fragrance. I bought them for daily pooja at home and really liked the variety of fragrances in the pack."
        },
        {
            CustomerName: "Pooja",
            Rating: 5,
            Review:
                "Loved the fragrance! Each variant has a different and pleasant aroma. The sticks are easy to use and the fragrance makes the whole room feel fresh."
        },
        {
            CustomerName: "Rahul",
            Rating: 5,
            Review:
                "Very good product for daily use. The fragrance is not too harsh and lasts quite well. Quality feels premium compared to other dhoop sticks I have used."
        }
    ];

    return (
        <>
            <h1 className="text-4xl font-bold text-center py-10 font-cinzel">What our Customer Says</h1>
        <div className="flex py-5 px-10 justify-between items-center gap-10 text-2xl w-full overflow-x-auto">
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="border-2 border-gray-200 w-1/2 shrink-0 py-5 px-10 rounded-2xl"
                >
                    <div className="font-bold text-4xl pb-5">
                        <p>{review.CustomerName}</p>

                        <div className="flex gap-1 text-yellow-500 text-xl">
                            {[...Array(review.Rating)].map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                    </div>

                    <div className="italic">
                        "{review.Review}"
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}
