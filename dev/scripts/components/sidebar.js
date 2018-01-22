import React from 'react';
import ReactDOM from 'react-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="innerWrapper">
                <form action="">
                    <h4>General Search Critieria</h4>
                    <div className="slider">
                        <p>Lifetime Social Followers</p>
                        <div className="sliderInput">
                            <input type="text" placeholder="0" />
                            <input type="text" placeholder="10M" />
                        </div>
                        <div className="sliderContainer">
                            <input type="range" className ="slider" id="myRange"/>
                        </div>
                    </div>
                    <select className="vertical" name="categories" size="4" multiple>
                        <option value="automotive">Automotive</option>
                        <option value="luxury">Luxury</option>
                        <option value="tourism">Tourism</option>
                        <option value="food">Food</option>
                        <option value="photography">Photography</option>
                        <option value="travel">Travel</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="fashion">Fashion</option>
                        <option value="beauty">Beauty</option>
                        <option value="sports">Sport</option>
                        <option value="gaming">Gaming</option>
                        <option value="business">Business</option>
                        <option value="moms">Moms</option>
                        <option value="dads">Dads</option>
                    </select>
                    <p>Channel Type</p>
                    <div className="channelType">
                        <div className="checkboxInput">
                            <input type="checkbox" id="channelType" name="influencer" value="influencer" />
                            <label htmlFor="influencer">Influencer</label>
                        </div>
                        <div className="checkboxInput">
                            <input type="checkbox" id="channelType" name="publisher" value="publisher" />
                            <label htmlFor="publisher">Publisher</label>
                        </div>
                        <div className="checkboxInput">
                            <input type="checkbox" id="channelType" name="artist" value="artist" />
                            <label htmlFor="artist">Artist</label>
                        </div>
                        <div className="checkboxInput">
                            <input type="checkbox" id="channelType" name="Brand" value="Brand" />
                            <label htmlFor="Brand">Brand</label>
                        </div>
                        <div className="checkboxInput">
                            <input type="checkbox" id="channelType" name="content" value="content" />
                            <label htmlFor="content">Content Creator</label>
                        </div>
                    </div>
                    <p>Creator Gender</p>
                    <div className="genderChoice">
                        <div className="checkboxInput">
                            <input type="checkbox" id="gender" name="male" value="male" />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="checkboxInput">
                            <input type="checkbox" id="gender" name="female" value="female" />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <p>Posts in Last 30 Days</p>
                    <div className="slider">
                        <div className="sliderInput">
                            <input type="text" placeholder="0"/>
                            <input type="text" placeholder="30" />
                        </div>
                        <input type="range" className="slider" id="myRange" />
                    </div>
                    <h4>YouTube Search Criteria</h4>
                    <p>Subscribers</p>
                    <div className="slider">
                        <div className="sliderInput">
                            <input type="text" placeholder="0" />
                            <input type="text" placeholder="10M" />
                        </div>
                        <input type="range" className="slider" id="myRange"/> 
                    </div>
                    <p>Views in Last 30 Days</p>
                    <div className="slider">
                        <div className="sliderInput">
                            <input type="text" placeholder="0" />
                            <input type="text" placeholder="100M" />
                        </div>
                            <input type="range" className="slider" id="myRange"/>
                    </div>
                    <div className="button">
                        <button className="sidebarButton" >Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Sidebar