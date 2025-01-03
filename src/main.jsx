import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import store from './redux/store'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <Provider store={store}>
            <ThemeProvider>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{
                        // Customize styling here if needed
                        style: {
                            zIndex: 9999, // Ensure high z-index
                        },
                    }}
                />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    </HelmetProvider>
)
