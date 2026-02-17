import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'

export const EcommerceApp = () => {
    return (
        <RouterProvider router={appRouter} />
    )
}
