import React from 'react'
import { ThemeProvider } from '@theme-ui/core'
import Navbar from '../components/Navbar'
import theme from '../theme';
import Announcement from '../components/Announcement';
import MainSlider from '../components/MainSlider';
import { Categories } from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Announcement />
      <Navbar />
      <MainSlider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </ThemeProvider>
  )
}

export default Home