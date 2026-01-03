'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { type SiteData, getSiteData } from '@/lib/data';
import { fetchSiteData } from '@/lib/siteData';

interface SiteDataContextType {
  data: SiteData;
  loading: boolean;
  refresh: () => Promise<void>;
}

const SiteDataContext = createContext<SiteDataContextType>({
  data: getSiteData(),
  loading: true,
  refresh: async () => {},
});

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(getSiteData());
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const fetched = await fetchSiteData();
      setData(fetched);
    } catch (error) {
      console.error('Failed to fetch site data', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const refresh = async () => {
    setLoading(true);
    await loadData();
  };

  return (
    <SiteDataContext.Provider value={{ data, loading, refresh }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export const useSiteData = () => useContext(SiteDataContext);
