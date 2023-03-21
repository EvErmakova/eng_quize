import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AppRoutes } from '../../consts';
import Header from '../header/header';
import Footer from '../footer/footer';
import WelcomeScreen from '../../pages/welcome-screen';
import CategoryScreen from '../../pages/category-screen';
import QuizScreen from '../../pages/quiz-screen';

function App() {
    return (
        <div className="min-h-screen flex flex-col [overflow-anchor:none]">
            <Header />

            <main className="flex-grow">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <Routes>
                        <Route path={AppRoutes.ROOT} element={<WelcomeScreen />} />
                        <Route path={`${AppRoutes.CATEGORY}/:category`}
                               element={<CategoryScreen />}
                        />
                        <Route path={`${AppRoutes.QUIZ}/:quizId`} element={<QuizScreen />} />
                    </Routes>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
