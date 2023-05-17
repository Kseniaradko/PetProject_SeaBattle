import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {GameAsync} from "./pages/Game/Game.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/Game'}>Game</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/Game'} element={<GameAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;