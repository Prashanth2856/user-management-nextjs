import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Seminar App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <ToastContainer
          autoClose={2000}
          position="bottom-right"
        />
      </body>
    </html>
  );
}
