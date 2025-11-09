const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pranshu Yadav. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm italic">
            Automate. Analyze. Act.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
