import React from 'react';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <header style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <h1>My Website</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="ge">Georgian</option>
        <option value="en">English</option>
      </select>
    </header>
  );
};

export default Header;
