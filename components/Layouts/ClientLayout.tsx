import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

interface Props {
  children: React.ReactNode
}

const ClientLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default ClientLayout
