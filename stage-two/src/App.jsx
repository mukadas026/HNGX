import React from 'react'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home'
import MovieDetails from './routes/MovieDetails'
import PageNotFound from './routes/PageNotFound'
import SearchResults from './routes/SearchResults'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path:'/movies/:movieID',
    element: <MovieDetails />,

  },
  {
    path:'/search',
    element: <SearchResults />
  }

])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App