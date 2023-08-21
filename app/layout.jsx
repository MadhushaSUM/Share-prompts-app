import '@styles/globals.css';

export const metadata = {
    title: "PromptSharer",
    description: "Share your favourite AI prompts and discover new ones"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout