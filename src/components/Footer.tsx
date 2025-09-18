const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Names */}
          <h3 className="font-script text-4xl text-primary mb-4">
            Sofia & Miguel
          </h3>
          
          {/* Wedding Date */}
          <p className="text-lg text-muted-foreground mb-6">
            December 15, 2024 • Santorini, Greece
          </p>
          
          {/* Divider */}
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
          
          {/* Quote */}
          <blockquote className="font-serif text-lg italic text-foreground mb-6 max-w-2xl mx-auto">
            "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
          </blockquote>
          <cite className="text-sm text-muted-foreground">— Lao Tzu</cite>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground mt-8">
            © 2024 Sofia & Miguel Wedding. Made with 💕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;