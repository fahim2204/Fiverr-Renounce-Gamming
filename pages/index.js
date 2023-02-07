import Head from "next/head";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Card from "../components/Card";
import Product from "../components/Product";
export default function Home() {
  return (
    <>
      <Head>
        <title>Renounce Gaming</title>
      </Head>
      <Banner />
      <Card />
      <Gallery />
      <Product />
      <Footer />
    </>
  );
}
