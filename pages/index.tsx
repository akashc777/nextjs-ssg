import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Link href="/faq">Goto Faq</Link>
        </div>
    );
};

export default Home;
