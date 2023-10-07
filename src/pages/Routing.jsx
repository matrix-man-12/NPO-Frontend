import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Network from '../Components/Common/Network'
import Auth from "../Components/Common/Auth";
import Layout from "../Components/Common/Layout";
import ErrorPage from "../Components/Common/ErrorPage";

import Dummy from "../Components/Dummy";

const Routing = () => {
    console.log(`In Routing`);

    return (
        <BrowserRouter>
            <Network>
                <Routes>
                    <Route exact path='/' element={<Dummy/>} />
                    <Route exact path='/home' element={<Dummy/>} />
                    <Route exact path='/logout' element={<Dummy/>} />
                    <Route path='*' element={<ErrorPage/>} />
                </Routes>
                {/* TODO: Add the authorized pages later */}
                    {/* <Auth>
                        <Layout>
                        <Routes>
                            <Route exact path='/profile' element={<Dummy/>} />
                        </Routes>
                        </Layout>
                    </Auth> */}
            </Network>
        </BrowserRouter>
    )
}

export default Routing