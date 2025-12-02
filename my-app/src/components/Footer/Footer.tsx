

export default function Footer() { 

    return (
        <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', borderTop: '1px solid #ccc' }}>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
            &copy; {new Date().getFullYear()} Kayla's Portfolio. All rights reserved.
        </p>
        </footer>
    );

}