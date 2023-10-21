import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomSuspense from "../Components/Common/CustomSuspense";

import Network from '../Components/Common/Network'
import Auth from "../Components/Common/Auth";
import Layout from "../Components/Common/Layout";
import Loader from "../Components/Common/Loader";

const ErrorPage = React.lazy(() => import('../Components/Common/ErrorPage'))

import Dummy from "../Components/Common/Dummy";

const Routing = () => {
    console.log(`In Routing`);

    return (
        <BrowserRouter>
            <Network>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Dummy/>} />
                        <Route exact path='/home' element={<Dummy/>} />
                        <Route exact path='/logout' element={<Dummy/>} />
                        <Route path='*' element={<CustomSuspense fallbackComponent={<Loader/>} mainComponent={<ErrorPage/>}/> }/>
                    </Routes>
                    {/* TODO: Add the authorized pages later */}
                        {/* <Auth>
                            <Layout>
                            <Routes>
                            <Route exact path='/profile' element={<Dummy/>} />
                            </Routes>
                            </Layout>
                        </Auth> */}
                </Layout>
            </Network>
        </BrowserRouter>
    )
}

export default Routing