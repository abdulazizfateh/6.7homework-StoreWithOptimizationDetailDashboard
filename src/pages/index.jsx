import React from "react"
// Lazy Import
import { lazy } from 'react';
// Lazy Loading (Custom)
import Suspense from '../utils';
// Route
import { Routes, Route, } from 'react-router-dom'
// Layout 
const Layout = lazy(() => import("./layout/Layout"));
// Main Pages
const NotFound = lazy(() => import("./notFound/NotFound"));
const Home = lazy(() => import("./home/Home"));
const Recipes = lazy(() => import("./recipes/Recipes"));
const Posts = lazy(() => import("./posts/Posts"));
const Users = lazy(() => import("./users/Users"));
const SignIn = lazy(() => import("./signin/SignIn"));
// Detail Pages
const ProductDetail = lazy(() => import("./product-detail/ProductDetail"));
const RecipeDetail = lazy(() => import("./recipe-detail/RecipeDetail"));
const PostsDetail = lazy(() => import("./posts-detail/PostsDetail"));
const UserDetail = lazy(() => import("./user-detail/UserDetail"));
// Dashboard Pages
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const MyGroups = lazy(() => import("./dashboard/my-groups/MyGroups"));
const Stats = lazy(() => import("./dashboard/stats/Stats"));
const Ranking = lazy(() => import("./dashboard/ranking/Ranking"));
const Payments = lazy(() => import("./dashboard/payments/Payments"));
const Store = lazy(() => import("./dashboard/store/Store"));
const ExtraLessons = lazy(() => import("./dashboard/extra-lessons/ExtraLessons"));
const Support = lazy(() => import("./dashboard/support/Support"));
const ContactWithStore = lazy(() => import("./dashboard/contact-with-store/ContactWithStore"));
const Settings = lazy(() => import("./dashboard/settings/Settings"));

function MainRouters() {
    const withSuspense = (Component) => (
        <Suspense>
            <Component />
        </Suspense>
    )
    return (
        <>
            <Routes>
                    // Main Pages
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/recipes' element={<Recipes />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/users' element={<Users />} />
                    // Detail Pages
                    <Route path='/product/:id' element={<ProductDetail />} />
                    <Route path='/recipe/:id' element={<RecipeDetail />} />
                    <Route path='/post/:id' element={<PostsDetail />} />
                    <Route path='/user/:id' element={<UserDetail />} />
                    // Not Found 
                    <Route path='*' element={<NotFound />} />
                </Route>
                    // Dashboard Page
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='' element={withSuspense(MyGroups)}></Route>
                    <Route path='statistics' element={withSuspense(Stats)}></Route>
                    <Route path='ranking' element={withSuspense(Ranking)}></Route>
                    <Route path='payments' element={withSuspense(Payments)}></Route>
                    <Route path='store' element={withSuspense(Store)}></Route>
                    <Route path='extra-lessons' element={withSuspense(ExtraLessons)}></Route>
                    <Route path='support' element={withSuspense(Support)}></Route>
                    <Route path='contact' element={withSuspense(ContactWithStore)}></Route>
                    <Route path='settings' element={withSuspense(Settings)}></Route>
                </Route>
                    // Sign In Page
                <Route path='/signin' element={withSuspense(SignIn)} />
            </Routes>
        </>
    )
}

export default React.memo(MainRouters);
