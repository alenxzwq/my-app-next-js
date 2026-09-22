export default function Container({ children, className = "" }) {
  return (
    <div className={`container-x mx-auto w-full max-w-[1440px] ${className}`}>
      {children}
    </div>
  );
}
