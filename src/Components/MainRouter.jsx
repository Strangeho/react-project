import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LoginPage from './User/LoginPage'
import Cart from './Cart'

const MainRouter = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
            </Routes>
        </Container>
    )
}

export default MainRouter
