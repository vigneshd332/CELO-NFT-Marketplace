import Navbar from "../navbar";
import Footer from "../footer";

export default function Layout({ children, setDarkMode, darkMode }) {
	return (
		<>
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			<main>{children}</main>
			<Footer darkMode={darkMode} setDarkMode={setDarkMode} />
		</>
	);
}
