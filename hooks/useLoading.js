// hooks/useLoading.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'; // Optional, if you want a loading bar

const useLoading = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      NProgress.start(); // Optional
    };
    const handleStop = () => {
      setLoading(false);
      NProgress.done(); // Optional
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return loading;
};

export default useLoading;
