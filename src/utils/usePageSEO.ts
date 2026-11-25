import { useEffect } from 'react';
import { COMPANY_INFO } from '../data/transportesData';

interface PageSEOConfig {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
}

const DEFAULT_TITLE = 'Transportes Feiten | Transfer Executivo Gramado e Canela';
const DEFAULT_DESCRIPTION =
  'Transfer Privativo e Transporte Executivo em Gramado, Canela e Serra Gaúcha. Especialista em transfer dos aeroportos de Porto Alegre (POA) e Caxias (CXJ) com frota executiva, pontualidade e segurança 5 estrelas.';

function setMetaContent(selector: string, content: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute('content', content);
  }
}

export function usePageSEO(config?: PageSEOConfig) {
  useEffect(() => {
    const title = config?.title || DEFAULT_TITLE;
    const description = config?.description || DEFAULT_DESCRIPTION;
    const cleanPath = config?.path ? (config.path === '/' ? '/' : config.path) : '/';
    const canonicalUrl = `${COMPANY_INFO.siteUrl}${cleanPath}`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[itemprop="name"]', title);
    setMetaContent('meta[itemprop="description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    const existingScript = document.getElementById('dynamic-page-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (config?.jsonLd) {
      const script = document.createElement('script');
      script.id = 'dynamic-page-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(config.jsonLd);
      document.head.appendChild(script);
    }
  }, [config?.title, config?.description, config?.path, config?.jsonLd]);
}
