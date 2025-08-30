import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Carrito Interactivo de Compras con Next.js 🤯",
  description: "Carrito de compras interactivo con Next.js y Bootstrap 5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
