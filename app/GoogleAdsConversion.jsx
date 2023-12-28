import React from "react";

const GoogleAdsConversion = () => {
  return (
    <>
      {/* Paste your Google Ads conversion tracking code here */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11459602182"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11459602182');
        `}
      </script>
    </>
  );
};

export default GoogleAdsConversion;
