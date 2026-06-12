function Header() {
    return (
        <>
            <h1 className="mainhead">Welcome to DriveSift</h1>
            <nav>
                <div className='container'>
                    <a href="#about">About</a>
                    <a href="#models">Models</a>
                    <a href="#service">Service</a>
                    <a href="#contact">Contact Us</a>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                        <button className="search-button">Search</button>
                    </div>
                    <button className="wishlist-button">
                        <i className="fas fa-heart"></i> Wishlist
                    </button>
                </div>
            </nav>
        </>


    );
}
export default Header
