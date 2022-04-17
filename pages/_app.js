import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />;
		</Layout>
	);
}

export default MyApp;
