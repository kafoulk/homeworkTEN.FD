


const pageContent = { 
    homeContent: `<div class="home">
    <section class="hero">
        <div class="logoHeading">travel-fly</div>
        <div class="heroText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Fugiat aliquid minus nemo sed est.</div>
        <div class="readMore">Read More</div>
    </section>
    <section class="promo-trips">
        <div class="israel">
            <h2 class="titleName">Israel</h2>
            <div class="price">from $1000</div>
            <div class="learnMore">Learn More</div>
        </div>
        <div class="usa">
            <h2 class="titleName">U.S.A.</h2>
            <div class="price">from $1500</div>
            <div class="learnMore">Learn More</div>
        </div>
        <div class="australia">
            <h2 class="titleName">Australia</h2>
            <div class="price">from $1800</div>
            <div class="learnMore">Learn More</div>
        </div>
    </section>
    <section class="booking">
        <h1>Booking Form</h1>
        <div class="bookingWrapper">
        
            <div class="basicInfo">
                <div class="basicInfo-1">
                    <label>
                    <input name="name" type="text" placeholder="    name..." autocomplete="name"></label>
                    <label>
                    <input name="country" type="text" placeholder="    country..." autocomplete="country"></label>
                </div>
                <div class="basicInfo-2">
                    <label>
                    <input name="email" type="text" placeholder="    email..." autocomplete="email"></label>
                    <label>
                    <input name="hotel" type="text" placeholder="    hotel..."></label>
                </div>
            </div>
            <div class="checkINOUT">
                <div class="checkIn">
                    <label>Check-in
                    <input name="checkIn" type="date" placeholder="date"></label>
                </div>
                <div class="checkOut">
                    <label>Check-out
                    <input  name="checkOut" type="date" placeholder="date"></label>
                </div>
            </div>
                <div class="numericals">
                    <div class="adults">
                        <label>Adults
                        <input  name="quantity" type="number" min="1" max="5" placeholder="0"></label>
                    </div>
                    <div class="children">
                        <label>Children
                        <input  name="quantity" type="number" min="1" max="5" placeholder="0"></label>
                    </div>
                    <div class="rooms">
                        <label>Rooms
                        <input name="quantity" type="number" min="1" max="5" placeholder="0"></label>
                    </div>
                </div>
                <div class="message">
                    <label>
                    <input name="typeMessage" type="text" placeholder="    Type message here..."></label>
                </div>
    
    
            <input class="bookingSubmit" type="submit" value="submit">
        </div>
    
    </section>
    </div>`,
    aboutContent: `<div class="about">
    <section>
        <div class="aboutHeading">
            <h1>About</h1>
        </div>
        <div class="aboutInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
        </section>
        <section class="quotes">
         <div class="quotesHeading">
            <h2>Client Quotes:</h2>
         </div>
        <div class="quotesInfo">
            <div class="quoteOne">
                <div class="quotesImage">
                    <img src="images/442c3df5e07094ad40ce7b852930b8d4.png"  alt="Customer">
                </div>
                <div class="quotesText">
                    <div class="paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi    architecto beatae vitae dicta sunt explicabo.
                    </div>
                    <div class="name">- Miranda Brown</div>
                     </div>
                </div>
                <div class="quoteTwo">
                    <div class="quotesImage">
                        <img src="images/about-client-02.png" alt="Customer">
                    </div>
                    <div class="quotesText">                    
                        <div class="paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi    architecto beatae vitae dicta sunt explicabo. </div>
                        <div class="name">- Johnathan wes</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>`,
    toursContent: `<section class="topImageCont">
<div class="topImage">
    <h1>TOURS:</h1>
</div>
</section>
<section class="tours">
    <div class="topRow">
        <div id="israel">
            <h2 class="titleName">Israel</h2>
            <div class="price">from $1000</div>
            <div class="learnMore">
            <a href="tourPackagePages/israelTourPackage.html">Learn More</a></div>
        </div>
        <div id="usa">
            <h2 class="titleName">U.S.A.</h2>
            <div class="price">from $1500</div>
            <div class="learnMore">
            <a href="tourPackagePages/usaTourPackage.html">Learn More</a></div>
        </div>
        <div id="australia">
            <h2 class="titleName">Australia</h2>
            <div class="price">from $1800</div>
            <div class="learnMore">
            <a href="tourPackagePages/australiaTourPackage.html">Learn More</a></div>
        </div>    
    </div>
    <div class="secondRow">
        <div id="newZealand">
            <h2 class="titleName">New Zealand</h2>
            <div class="price">from $1200</div>
            <div class="learnMore">
            <a href="tourPackagePages/newZealandTourPackage.html">Learn More</a></div>
        </div>
        <div id="france">
            <h2 class="titleName">France</h2>
            <div class="price">from $2500</div>
            <div class="learnMore">
            <a href="tourPackagePages/franceTourPackage.html">Learn More</a></div>
        </div>
        <div id="egypt">
            <h2 class="titleName">Egypt</h2>
            <div class="price">from $900</div>
            <div class="learnMore">
            <a href="tourPackagePages/egyptTourPackage.html">Learn More</a></div>
        </div>
    </div>
    <div class="thirdRow">
        <div id="japan">
            <h2 class="titleName">Japan</h2>
            <div class="price">from $1300</div>
            <div class="learnMore">
            <a href="tourPackagePages/japanTourPackage.html">Learn More</a></div>
        </div>
        <div id="canada">
            <h2 class="titleName">Canada</h2>
            <div class="price">from $2000</div>
            <div class="learnMore">
            <a href="tourPackagePages/canadaTourPackage.html">Learn More</a></div>
        </div>
        <div id="uae">
            <h2 class="titleName">U.A.E.</h2>
            <div class="price">from $3000</div>
            <div class="learnMore">
            <a href="tourPackagePages/uaeTourPackage.html">Learn More</a></div>
        </div>

    </div>
    </section>`,
    specialOffersContent: `<section class="specialOffersContainer">
<div>
    <h1 class="offersHeading">Special Offer(s):</h1>
</div>    
<div class="specialOfferPackages">
    <div class="barcelona">
        <img src="images/f8be878f3e256c54c10350fc7b400f35.png" alt="Barcelona">
        <div class="offerText">                    
            <div class="offerTitle">BARCELONA, SPAIN</div>
            <div class="offerDiscount">(20% off)</div>
            <div class="offerInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div> 
            <div class="learnMore">Learn More</div>  
        </div>

    </div>
    <div class="bangkok">
        <img src="images/special-offer-02.png" alt="Bangkok">
        <div class="offerText">                    
            <div class="offerTitle">BONGKOK, THAILAND</div>
            <div class="offerDiscount">(10% off)</div>
            <div class="offerInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div> 
            <div class="learnMore">Learn More</div>  
        </div>
    </div>  
</div>
    </section>`,
    blogContent: ` <section class="blogContainer">
<div>
    <h1 class="blogHeading">Blog:</h1>
</div>    
<div class="blogPosts">
    <div class="blogPostOne">
        <div class="blogTop">
            <div class="blogDate"><span class="date">06</span>JUN</div>
            <img src="images/9cba108c5ac096ceff2a3d446e0b7b45.png" alt="blog">
        </div>
        <div class="blogText">                    
            <div class="blogTitle">BARCELONA, SPAIN</div>
            <div class="blogInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div> 
        </div>

    </div>
    <div class="blogPostTwo">
        <div class="blogTop">
            <div class="blogDate"><span class="date">23</span>JUL</div>
            <img src="images/9cba108c5ac096ceff2a3d446e0b7b45.png" alt="blog">
        </div>
        <div class="blogText">                    
            <div class="blogTitle">BONGKOK, THAILAND</div>
            <div class="blogInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div> 
        </div>
    </div>  
</div>
    </section>`,
    contactContent: `<section class="contactPageContainer">
<div>
    <h1 class="contactHeading">Contact Us:</h1>
</div>    
<div class="contactInfo">
    <div class="leftSide">
        <img src="images/c9630e6a0d4eea8424c9e77634f917b5.png" alt="contact">
        <div class="mapText">                    
            
                <h4>travel-fly Inc.</h4>
                <h4>8901 Marmora Road,</h4>
                <h4>Glasgow, D04 89GR.</h4>
                <h4>Freephone:+1 800 559 6580</h4>
                <h4>Telephone:+1 800 603 6035</h4>
                <h4>FAX:+1 800 889 9898</h4>
                <h4>E-mail: mail@travelfly.org</h4>
            
        </div>

    </div>
    <div class="rightSide">
        <div class="message">
            <div class="contactFormWrapper">
            
                <div class="messageInfo">
                        <label>
                        <input name="name" type="text" placeholder="    Your Name" autocomplete="name" ></label>
                        <label>
                        <input name="email" type="text" placeholder="    Email Address" autocomplete="name" ></label>
                        <label>
                        <input name="company" type="text" placeholder="    Company" autocomplete="work" ></label>
                        <label>
                        <input name="messageBox" type="text" placeholder="    Message..."></label>
                </div>
                
                <input class="sendMessage" type="submit" value="Send Message">
            </div>

        </div>
    </div>  
</div>
</section>`,
};

export function changePageContent(pageID) {
    const pageName = pageID + "Content";
    $("#app").html(pageContent[pageName]);
    // console.log("change ", pageID);
}