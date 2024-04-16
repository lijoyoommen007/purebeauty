import React from 'react'
import ItemCard from '../components/blogItemCard'
import NavBar from '../components/navBar'
import Footer from '../components/footer'

export default function index() {
  return (
    <>
    <NavBar subNavData="Blogs"/>
    <ItemCard/>
    <div className='relative'>
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/744cf105474ecf78999e28ab98443404dd36fac74df524d67408c2f767918e62?apiKey=087df68079624fb19f353daf9a4716f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/744cf105474ecf78999e28ab98443404dd36fac74df524d67408c2f767918e62?apiKey=087df68079624fb19f353daf9a4716f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/744cf105474ecf78999e28ab98443404dd36fac74df524d67408c2f767918e62?apiKey=087df68079624fb19f353daf9a4716f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/744cf105474ecf78999e28ab98443404dd36fac74df524d67408c2f767918e62?apiKey=087df68079624fb19f353daf9a4716f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/744cf105474ecf78999e28ab98443404dd36fac74df524d67408c2f767918e62?apiKey=087df68079624fb19f353daf9a4716f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/744cf105474ecf78999e28ab98443404dd36fac74df524d67408c2f767918e62?apiKey=087df68079624fb19f353daf9a4716f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/744cf105474ecf78999e28ab98443404dd36fac74df524d67408c2f767918e62?apiKey=087df68079624fb19f353daf9a4716f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/744cf105474ecf78999e28ab98443404dd36fac74df524d67408c2f767918e62?apiKey=087df68079624fb19f353daf9a4716f6&"
      className="w-full aspect-[2]"
      
    />
      <div className="absolute inset-0 bg-black opacity-50"></div>

    </div>
    <Footer/>
    </>
  )
}
  