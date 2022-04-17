import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ItemPage } from '../pages/ItemPage';

export const Routers = () => {

    return (
        <Routes>
            <Route caseSensitive path="/" element={<Home />} />
            <Route caseSensitive path="/signin" element={<SignIn />} />
            <Route caseSensitive path="/signup" element={<SignUp />} />
            <Route caseSensitive path="/ad/:id" element={<ItemPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}