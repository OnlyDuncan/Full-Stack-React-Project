import Nav from './nav';

export default function Layout({ children }){
    return(
        <div>
            <Nav />
            <main>{children}</main>
        </div>
    );
};