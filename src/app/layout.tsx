import './globals.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

export const metadata = {
  title: ' Cairo hotel services',
  description: 'أفضل خدمات تنظيف فتحات التهوية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir='rtl'>
      <body>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
