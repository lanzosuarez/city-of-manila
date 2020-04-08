const scrollToSection = location => {
  const { hash } = location;
  if (hash.length) {
    const el = document.getElementById(hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default scrollToSection;
