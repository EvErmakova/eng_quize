import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Quizes from '../mocks/quizes';
import { AppRoutes } from '../consts';

function CategoryScreen() {
    const {category} = useParams();

    return (
        <>
            <h1 className="text-4xl font-extrabold mb-8">{category?.toUpperCase()}</h1>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {Quizes.filter(item => item.category.toLowerCase() === category).map((item, index) => (
                    <Link
                        to={`${AppRoutes.QUIZ}/${item.id}`} key={`quiz-${index}`}
                        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">{item.title}</h5>
                        <p className="font-normal text-gray-700">{item.description}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default CategoryScreen;
