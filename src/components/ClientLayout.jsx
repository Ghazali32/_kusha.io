'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useUI } from '../context/UIContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingDock } from './FloatingDock';

// Dynamically load heavy interactive modals only when opened to keep initial mobile bundle minimal
const ContactModalAndSection = dynamic(
  () => import('./ContactModalAndSection').then((m) => m.ContactModalAndSection),
  { ssr: false }
);

const SearchModal = dynamic(
  () => import('./SearchModal').then((m) => m.SearchModal),
  { ssr: false }
);

const NotificationDrawer = dynamic(
  () => import('./NotificationDrawer').then((m) => m.NotificationDrawer),
  { ssr: false }
);

export function ClientLayout({ children }) {
  const {
    contactModalOpen,
    setContactModalOpen,
    contactType,
    contactSubject,
    searchModalOpen,
    setSearchModalOpen,
    notificationsOpen,
    setNotificationsOpen,
    handleOpenContact,
  } = useUI();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-app)', color: 'var(--text-primary)', position: 'relative' }}>
      {/* Top Navbar */}
      <Navbar 
        onOpenContact={handleOpenContact} 
        onOpenSearch={() => setSearchModalOpen(true)} 
      />

      {/* Main Content Area */}
      <main id="main-content">
        {children}
      </main>

      {/* Global Contact Modal (Triggered via Buttons / Navbar) - Rendered only when opened */}
      {contactModalOpen && (
        <ContactModalAndSection 
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          initialType={contactType}
          initialSubject={contactSubject}
          modalOnly={true}
        />
      )}

      {/* Global Footer with KVK 98986708, GDPR, Legal, and Target Markets */}
      <Footer 
        onOpenContact={handleOpenContact} 
      />

      {/* Floating Bottom Navigation Dock */}
      <FloatingDock 
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenNotifications={() => setNotificationsOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Global Spotlight Search Modal (⌘K) - Rendered only when opened */}
      {searchModalOpen && (
        <SearchModal 
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onOpenContact={handleOpenContact}
        />
      )}

      {/* Operational Feed / Notification Drawer - Rendered only when opened */}
      {notificationsOpen && (
        <NotificationDrawer 
          isOpen={notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
          onOpenContact={handleOpenContact}
        />
      )}
    </div>
  );
}

export default ClientLayout;
