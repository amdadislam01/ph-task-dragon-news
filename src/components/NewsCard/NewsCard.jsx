import { id } from "date-fns/locale";
import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
        tags,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
            {/* Author Section */}
            <div className="flex items-center justify-between px-5 pt-5">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full border"
                    />
                    <div>
                        <h3 className="text-sm font-semibold">{author?.name}</h3>
                        <p className="text-xs text-gray-500">
                            {new Date(author?.published_date).toLocaleDateString("en-GB")}
                        </p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-primary flex gap-3">
                    <FaRegBookmark size={18} />
                    <FaShareAlt size={18} />
                </button>
            </div>

            {/* Title */}
            <div className="px-5 pt-3">
                <h2 className="text-lg md:text-xl font-semibold leading-snug text-gray-800">
                    {title}
                </h2>
            </div>

            {/* Image */}
            <figure className="px-5 pt-3">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-lg w-full h-52 object-cover"
                />
            </figure>

            {/* Details */}
            <div className="px-5 py-3 text-gray-600 text-sm">
                {details.length > 180 ? (
                    <>
                        {details.slice(0, 180)}...
                        <Link to={`/newsDetails/${id}`} className="text-primary cursor-pointer font-medium">
                            {" "}
                            Read More
                        </Link>
                    </>
                ) : (
                    details
                )}
            </div>

            {/* Tags */}
            <div className="px-5 flex flex-wrap gap-2 mb-3">
                {tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 pb-4 border-t border-gray-100 pt-3">
                <div className="flex items-center text-warning">
                    {Array.from({ length: rating.number }).map((_, i) => (
                        <FaStar key={i} className="mr-1" />
                    ))}
                    <span className="font-medium text-gray-700">{rating?.number}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                    <FaEye className="mr-1" />
                    <span>{total_view.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;