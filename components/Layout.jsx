import React from 'react'
import { Header } from './';
import { ThemeProvider } from "next-themes";


export const Layout = ({children}) => {
  return (
    <>
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      {children}
    </ThemeProvider>

    </>
  )
}
export default Layout
