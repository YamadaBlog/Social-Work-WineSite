import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/shoponline"></Link>
                </li>
                <li>
                    <Link href="/faq"></Link>
                </li>
                <li>
                    <Link href="/trustus"></Link>
                </li>
                <li>
                    <Link href="/privacypolicy"></Link>
                </li>

            </ul>
        </nav>
    );
};

export default Navigation;
