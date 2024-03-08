/*
 * Footer
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10">
      <div className="text-center text-xs opacity-25">
        &copy; Copyright {currentYear} of theCSSguru
      </div>
    </footer>
  );
};
