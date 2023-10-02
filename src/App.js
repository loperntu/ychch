import React from 'react';
// components
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Task from './components/Task';
import Activity from './components/Activity';
import Contact from './components/Contact';
import Group from './components/Group';
import axios from "axios";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationZH from "./locales/zh-TW/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh",
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const { t } = useTranslation();
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* pass down useTranslation() to each components  */}
      <Header t={t} />
      <Home t={t} /> 
      <About t={t} />
      <Task t={t} />
      <Activity t={t} />
      <Group t={t} />
      <Contact t={t} />
    </div>
  );
};

export default App;
