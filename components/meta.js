import Head from "next/head";

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Raleway");
      body {
        background: #000;
        color: #fff;
        font-family: "Raleway", sans-serif;
      }
      a {
        color: #fff;
      }
      a:hover {
        color: #ccc;
      }
    `}</style>
  </div>
);

export default Meta;
