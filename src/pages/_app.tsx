import '../styles/globals.css';
import { AppProps } from 'next/app';

export default function App(props: AppProps) {
	return <props.Component {...props.pageProps} />;
}
