import Layout from "../components/layout";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
			document.body.classList.remove("light");
		} else {
			document.body.classList.add("light");
			document.body.classList.remove("dark");
		}
	}, [darkMode]);
	return (
		<Layout darkMode={darkMode} setDarkMode={setDarkMode}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default dynamic(() => Promise.resolve(MyApp), {
	ssr: false,
});
