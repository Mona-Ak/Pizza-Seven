import '@styles/global.css';  
import Nav from '@components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
    title: "pizza-seven"
}

export const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>  
            <main className='layout'>
                <Nav />

                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
