function Container({ children, className = "" }) {
  return (
    <div className={`relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
