import Head from "next/head";
import Link from "next/link";
export default function Home() {
    return (
        <div>
            <h1>hey this is auth index</h1>
            <p>
                Go to home :{" "}
                <Link href="/">
                    <a>Home</a>
                </Link>{" "}
            </p>
        </div>
    );
}
