'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactType, setContactType] = useState('project');
  const [contactSubject, setContactSubject] = useState('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleOpenContact = (type = 'project', subject = '') => {
    setContactType(type);
    setContactSubject(subject);
    setContactModalOpen(true);
  };

  const handleOpenScoper = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <UIContext.Provider
      value={{
        contactModalOpen,
        setContactModalOpen,
        contactType,
        setContactType,
        contactSubject,
        setContactSubject,
        searchModalOpen,
        setSearchModalOpen,
        notificationsOpen,
        setNotificationsOpen,
        handleOpenContact,
        handleOpenScoper,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    return {
      contactModalOpen: false,
      setContactModalOpen: () => {},
      contactType: 'project',
      setContactType: () => {},
      contactSubject: '',
      setContactSubject: () => {},
      searchModalOpen: false,
      setSearchModalOpen: () => {},
      notificationsOpen: false,
      setNotificationsOpen: () => {},
      handleOpenContact: () => {},
      handleOpenScoper: () => {},
    };
  }
  return context;
}
