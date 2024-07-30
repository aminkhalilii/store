import ClientLayout from "@/components/Layouts/ClientLayout";
import Head from 'next/head'
import {siteDescription} from "@/utils/constatns";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {InferGetStaticPropsType, NextPage} from "next";
import config from "@/config";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/products');
    }, [router]);

    return (
      <ClientLayout>
        <main className='min-h-screen space-y-4 xl:mt-28'>
          <Head>
            <title data-testid="titleHome">فروشگاه اینترنتی دیجی‌کالا</title>
            <meta name='description' content={siteDescription} />
          </Head>
        </main>
      </ClientLayout>
      )
}

export const getStaticProps = async () => {
    return {
        revalidate: config.revalidate,
        props:{}
    }
}

export default Home
