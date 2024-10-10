import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayElements from '../DisplayElements/DisplayElements'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DisplayElements />} />
            </Routes>
        </>
    )
}

export default AppRoutes