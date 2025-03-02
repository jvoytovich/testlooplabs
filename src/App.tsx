import React from 'react';
import { ArrowRight, Brain, LineChart, Rocket } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ProductCard } from './components/ProductCard';
import { ServiceCard } from './components/ServiceCard';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { products } from './data/products';
import { services } from './data/services';

// Simple router implementation
function useRouter() {
  const [path, setPath] = React.useState(window.location.pathname);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
  };

  React.useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { path, navigate };
}

function App() {
  const { path, navigate } = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  // Update page title and meta description based on current route
  React.useEffect(() => {
    const titles = {
      '/': 'TestLoop Labs - Product Management & AI Solutions',
      '/about': 'About Us - TestLoop Labs',
      '/contact': 'Contact Us - TestLoop Labs',
      '/services': 'Our Services - TestLoop Labs',
      '/products': 'AI Products - TestLoop Labs'
    };
    const descriptions = {
      '/': 'TestLoop Labs specializes in product-led growth, marketing automation, and AI-driven solutions that help companies scale.',
      '/about': 'Learn about TestLoop Labs and our mission to transform product management through AI innovation.',
      '/contact': 'Get in touch with TestLoop Labs for product management consulting and AI solutions.',
      '/services': 'Explore our comprehensive range of product management and AI consulting services.',
      '/products': 'Discover our innovative AI-powered products designed to optimize your business growth.'
    };

    document.title = titles[path as keyof typeof titles] || titles['/'];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[path as keyof typeof descriptions] || descriptions['/']);
    }
  }, [path]);

  // Simulate page transition
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [path]);

  const renderPage = () => {
    switch (path) {
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/products':
        return <Products />;
      case '/contact':
        return <Contact />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="bg-cream-100 py-32">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <Logo size="large" className="mx-auto mb-12 text-ink-900" />
                  <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-ink-900">
                    Boost User Engagement & Drive Funnel Conversions
                  </h1>
                  <p className="text-xl mb-12 text-ink-700 leading-relaxed">
                    At TestLoop Labs, we specialize in product-led growth, marketing automation, and 
                    AI-driven solutions that help companies scale.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      variant="primary" 
                      onClick={() => navigate('/contact')}
                    >
                      Schedule a Free Consultation
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={() => navigate('/products')}
                    >
                      Explore Our AI Products
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <h2 className="text-4xl font-display font-bold mb-6">Why Choose TestLoop Labs?</h2>
                  <p className="text-ink-700 text-lg leading-relaxed">
                    We combine deep product expertise with AI innovation to help businesses grow through 
                    rapid experimentation and data-driven optimization.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <LineChart className="text-indigo-600" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">Data-Driven Growth</h3>
                    <p className="text-gray-600">Analytics-backed strategies for sustainable growth</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="text-indigo-600" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">AI Innovation</h3>
                    <p className="text-gray-600">Cutting-edge AI solutions for modern challenges</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="text-indigo-600" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">Rapid Experimentation</h3>
                    <p className="text-gray-600">Quick iterations for maximum impact</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-100">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                  ))}
                </div>
              </div>
            </section>

            {/* Products Section */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">AI Product Portfolio</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-indigo-600 text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Product?</h2>
                <p className="text-xl mb-8 text-indigo-100">
                  Let's discuss how we can help you achieve your growth goals.
                </p>
                <Button 
                  className="bg-white text-indigo-600 hover:bg-indigo-50 inline-flex items-center gap-2"
                  onClick={() => navigate('/contact')}
                >
                  Get Started Today
                  <ArrowRight size={16} />
                </Button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={navigate} />
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        renderPage()
      )}
      <Footer />
    </div>
  );
}

export default App;
