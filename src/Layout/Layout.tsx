import Header from '../Header/Header';
// import NextNprogress from 'nextjs-progressbar';

function Layout({ children }): JSX.Element {
    return (
        <>
            <div className="layout-container">
                <Header />
                {children}
            </div>
        </>
    );
}

export default Layout;
