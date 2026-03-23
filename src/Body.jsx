import Image1 from './assets/rr.jpeg'
import Image2 from './assets/new.jpg'
import Image3 from './assets/peakpx.jpg'
import Image4 from './assets/extra.jpg'
function Body() {
    return (<><div className="card">
        <img className="card-image" src={Image1} alt=" Rolls royce"></img>
        <h2 className="card-title">Rolls Royce</h2>
        <p className="card-text">V12 engine</p>
        <button className="learn-more-button">See More</button>
    </div>
        <div className="card">
            <img className="card-image" src={Image2} alt=" Audi "></img>
            <h2 className="card-title">Audi</h2>
            <p className="card-text">V12 engine</p>
            <button className="learn-more-button">See More</button>
        </div>
        <div className="card">
            <img className="card-image" src={Image3} alt="Lamborgani"></img>
            <h2 className="card-title">Lamborgani</h2>
            <p className="card-text">V12 engine</p>
            <button className="learn-more-button">See More</button>
        </div>
        <div className="card">
            <img className="card-image" src={Image4} alt=" Mustang"></img>
            <h2 className="card-title">Mustang</h2>
            <p className="card-text">V8 engine</p>
            <button className="learn-more-button">See More</button>
        </div></>

    );

}
export default Body
