import Link from 'next/link';

function Header(): JSX.Element {
    return (
        <>
            <div className="header-container flex space-between">
                <div className="current-page">.home()</div>
                <nav className="header-nav">
                    <ul className="flex">
                        <li className="header-li">
                            <Link href="/"> .home()</Link>
                        </li>
                        <li className="header-li">
                            <Link href="/about"> .about()</Link>
                        </li>
                        <li className="header-li">
                            <Link href="/about"> .contact()</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
