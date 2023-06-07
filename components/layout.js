import { useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

export default function Layout({ children }) {
  const lenis = useLenis();
  useEffect(() => { lenis?.scrollTo(0, { immediate: true }) } , [lenis]);
  
  return (
    <>
      {children}
    </>
  )
}