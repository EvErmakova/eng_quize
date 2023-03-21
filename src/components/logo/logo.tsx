import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../consts';

function Logo(): JSX.Element {
    return (
        <Link to={AppRoutes.ROOT} className="flex items-center">
            <span className="block">
                <QuestionMarkCircleIcon height={40} fill='#16a34a' />
            </span>

            <span className="block ml-2 text-green-600">Eng Riddler</span>
        </Link>
    );
}

export default Logo;
