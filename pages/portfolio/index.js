// import Head from "next/head";
import { SiteLinks } from "./components/top-nav/site-links";
import { Footer } from "./components/footer/footer";
import { Content } from "./components/content/contents";

export default function Portfolio(props) {
  const { data } = props;

  return (
    <>
      <SiteLinks />
      <Footer />
      <Content />
    </>
  );
}
