function Header() {
    return (
        <>
            <h1 className="mainhead">Welcome to DriveSift</h1>
            <nav>
                <div className='container'>
                    <a href="">About</a>
                    <a href="">Models</a>
                    <a href="">Service</a>
                    <a href="">Contact Us</a>
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