import { createBrowserRouter, Navigate } from 'react-router';
import { ShopLayout } from '../shop/layouts/ShopLayout';
import { HomePage } from '../shop/pages/home/HomePage';
import { GenderPage } from '../shop/pages/gender/GenderPage';
import { ProductPage } from '../shop/pages/producto/ProductPage';
import { LoginPage } from '../auth/pages/login/LoginPage';
import { DashboardPage } from '../admin/pages/dashboard/DashboardPage';
import { RegisterPage } from '../auth/pages/register/RegisterPage';
import { AdminProductsPage } from '../admin/pages/products/AdminProductsPage';
import { AdminProductPage } from '../admin/pages/product/AdminProductPage';
import { lazy } from 'react';

const AdminLayout = lazy(() => import('../admin/layouts/AdminLayout'));
const AuthLayout = lazy(() => import('../auth/layouts/AuthLayout'));


export const appRouter = createBrowserRouter([
    // Main routes
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />
            }
        ]
    },

    //Auth Routes
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                // Se usa "index: true" para que al entrar a /auth  redirija automáticamente a /auth/login.
                // Esto evita que /auth renderice contenido vacío y permite mantener la ruta base del layout.
                index: true,
                element: <Navigate to='/auth/login' />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },

    //Admin Routes
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'product/:id',
                element: <AdminProductPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />
    }
])