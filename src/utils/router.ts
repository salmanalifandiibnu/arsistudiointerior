import { useState, useEffect } from 'react';

// Lightweight, zero-dependency client-side router
export function useRouter() {
  const [path, setPath] = useState(() => 
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pushstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    const [targetPath, targetHash] = to.split('#');
    const fullHash = targetHash ? `#${targetHash}` : '';
    const cleanTargetPath = targetPath === '' ? '/' : targetPath;

    // Check if we are staying on the same pathname
    if (cleanTargetPath === window.location.pathname) {
      if (fullHash) {
        window.history.pushState({}, '', to);
        const element = document.querySelector(fullHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.history.pushState({}, '', to);
        window.scrollTo(0, 0);
      }
      return;
    }

    // Changing pathname (e.g. from /wawasan/slug to /#wawasan)
    window.history.pushState({}, '', to);
    window.dispatchEvent(new Event('pushstate'));
    if (!fullHash) {
      window.scrollTo(0, 0);
    }
  };

  return { path, navigate };
}
