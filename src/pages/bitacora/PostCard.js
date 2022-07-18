import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const PostCard = ({ className, id, item }) => {
    const { description, headerBg, thumbnail, title } = item;

    return (
        <Link className={clsx(className, 'max-w-[300px] overflow-hidden')} to={`/bitacora/${id}`}>
            <div className="h-[300px] w-full mx-auto">
                <img
                    className="h-full object-cover"
                    src={thumbnail?.fields?.file?.url || headerBg?.fields?.file?.url}
                    alt={thumbnail?.fields?.title || headerBg?.fields?.title}
                />
            </div>
            <h3 className="font-primary text-orange text-xl font-medium lowercase my-4">{title}</h3>
            <p className="line-clamp-2 text-beige">{description}</p>
        </Link>
    );
};

export default PostCard;
