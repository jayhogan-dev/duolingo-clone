import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

// landing Layout

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
