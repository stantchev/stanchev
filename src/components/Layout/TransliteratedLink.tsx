import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { transliterateCyrillicToLatin, getCanonicalUrl } from '../../utils/transliteration';

interface TransliteratedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  preferLatin?: boolean;
}

const TransliteratedLink: React.FC<TransliteratedLinkProps> = ({ 
  to, 
  preferLatin = false, 
  children, 
  ...props 
}) => {
  // Determine the target URL based on preference
  const targetUrl = preferLatin ? transliterateCyrillicToLatin(to) : to;
  
  return (
    <Link to={targetUrl} {...props}>
      {children}
    </Link>
  );
};

export default TransliteratedLink;