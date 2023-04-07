import { useCallback, useEffect } from 'react';
import cookie from 'react-cookies';
import Block1 from '../../components/block-1';
import Block2 from '../../components/block-2';
import Block3 from '../../components/block-3';
import Block4 from '../../components/block-4';
import Block5 from '../../components/block-5';


const Home = () => {
  const getUrlData = useCallback(() => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const utm = {
      "utm_source": searchParams.get("utm_source"),
      "utm_medium": searchParams.get("utm_medium"),
      "utm_campaign": searchParams.get("utm_campaign"),
      "utm_term": searchParams.get("utm_term"),
      "utm_content": searchParams.get("utm_content"),
      "referrer":  document.referrer,
      "landing_page":  window.location.href
    }
    const cookieSetup = {
      path: "/",
      domain: ".langgenius.dev"
    };
    cookie.save("utm", window.btoa(unescape(encodeURIComponent(JSON.stringify(utm)))), cookieSetup)
  }, []);

  useEffect(() => {
    getUrlData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
    </>
  )
};

export default Home;
