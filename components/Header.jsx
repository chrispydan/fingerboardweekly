import React, { useState, useEffect } from 'react';
import {useTheme} from "next-themes";
import Link from 'next/link';
import { getCategories } from '../services';
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";


const Header = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);

    const {systemTheme , theme, setTheme} = useTheme ();

    const renderThemeChanger= () => {
  
        const currentTheme = theme === "system" ? systemTheme : theme ;
  
        if(currentTheme ==="dark"){
          return (
            <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }
  
        else {
          return (
            <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
          )
        }
     };

  return (
    <div className="container mx-auto px-10 mb-8">
    <div className="border-b w-full inline-block border-gray-400 dark:border-gray-700 py-8">
      <div className="md:float-left block">
        <Link href="/">
          <span className="cursor-pointer text-4xl">FINGERBOARD WEEKLY</span>
        </Link>
      </div>
      <div className="hidden md:float-left md:contents">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
        ))}
                {renderThemeChanger()}

      </div>

    </div>
  </div>
   );
};

export default Header