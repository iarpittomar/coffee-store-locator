import Head from "next/head";
import { useRouter } from "next/router";

const Dynamic = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <Head>
        <title>{router.query.dynamic}</title>
      </Head>
      Dynamic route: {router.query.dynamic}
    </div>
  );
};

export default Dynamic;
