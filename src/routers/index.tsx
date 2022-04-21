import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ItemPage } from '../pages/ItemPage';
import { RequireAuth } from './RequireAuth';
import { CreatedAd } from '../pages/CreatedAd';
import { Ads } from '../pages/Ads';
import { Profile } from '../pages/Profile';

export const Routers = () => {

    return (
        <Routes>
            <Route caseSensitive path="/buynow_front_olx_api" element={<Home />} />
            <Route caseSensitive path="/buynow_front_olx_api/signin" element={<SignIn />} />
            <Route caseSensitive path="/buynow_front_olx_api/signup" element={<SignUp />} />
            <Route caseSensitive path="/buynow_front_olx_api/ad/:id" element={<ItemPage />} />
            <Route caseSensitive path="/buynow_front_olx_api/ads" element={<Ads />} />
            <Route caseSensitive path='/buynow_front_olx_api/post-an-ad' element={
                <RequireAuth>
                    <CreatedAd />
                </RequireAuth>
            } />
            <Route caseSensitive path='/buynow_front_olx_api/profile' element={
                <RequireAuth>
                    <Profile />
                </RequireAuth>
            } />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}