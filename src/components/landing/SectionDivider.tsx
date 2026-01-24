const SectionDivider = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 md:py-12">
      <div 
        className="h-px w-full"
        style={{
          background: 'linear-gradient(to right, transparent 0%, #e5e7eb 20%, #e5e7eb 80%, transparent 100%)'
        }}
      />
    </div>
  );
};

export default SectionDivider;
