import './Footer.css';

export default function Footer() {

    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Greet Now <span>&#169;</span> {year}</p>
        </footer>
    )
}
