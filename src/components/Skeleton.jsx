const Skeleton = ({ className = 'w-full h-full', rounded = 'rounded-lg', children = null }) => {
  return (
    <div
      className={`${className} ${rounded} skeleton-shimmer relative overflow-hidden`}
      aria-hidden="true">
      {children}
    </div>
  );
};

export default Skeleton;
