// src/pages/Contact.tsx
import React from 'react';
import Card from '@/app/(general)/Cards/Card';
import Layout from '@/app/layout'; 



const ContactPage: React.FC = () => {
  return (
    <Layout>
      <h1>Informacion</h1>
      <Card 
        header="Bienvenido a la página de Infomacion" 
        body="Si tienes alguna pregunta, no dudes en contactarnos." 
      />
      <Card 
        header="Soporte" 
        body="Nuestro equipo de soporte está aquí para ayudarte." 
      />
    </Layout>
  );
};

export default ContactPage;