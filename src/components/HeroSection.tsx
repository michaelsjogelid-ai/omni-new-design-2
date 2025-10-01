import Hero from './ui/neural-network-hero';

const HeroSection: React.FC = () => {
  const handleCTAClick = () => {
    const email = prompt('Enter your email to join the inner circle:');
    if (email && email.includes('@')) {
      alert('Thank you! We\'ll be in touch soon.');
      console.log('Email collected:', email);
    }
  };

  return (
    <Hero
      title="AUTOMATE BEYOND LIMITS"
      description="Fuel growth with smarter solutions. Trusted by innovators who push boundaries and redefine what's possible with automation."
      badgeText="AI-Powered Automation"
      badgeLabel="Trusted by Innovators"
      ctaButtons={[
        { text: "Fuel Growth with Smarter Solutions", onClick: handleCTAClick, primary: true }
      ]}
      microDetails={["Neural Networks", "Advanced AI", "Future Ready"]}
    />
  );
};

export default HeroSection;