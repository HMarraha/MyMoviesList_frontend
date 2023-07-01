import { Link } from "react-router-dom"

export default function Welcomehero() {
  return (
    <>
        <main id="hero">
            <div className='welcomehero'>
                <div className='welcomehero-text'>
                    <h1>Welcome to MyMoviesList! You can track how many movies you've watched, still watching, and want to watch.</h1>
                    <p className="p-1">Search from our wide collection of Movies/TV Shows and add them to your lists.</p>
                    <div className='btn-container'>
                      <Link style={{textDecoration: 'none'}} to="/search"><button className='btn welcomehero-btn'>Search</button></Link>
                    </div>    
                </div>
            </div>
        </main>
    </>
  )
}
