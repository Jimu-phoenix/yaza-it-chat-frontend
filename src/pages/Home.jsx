import { Link } from "react-router-dom"
import { UserButton } from "@clerk/clerk-react"
import Nav from '../components/Nav'
import '../styles/Home.css'
import BlurText from '../../BlurText'
import WhyCard from "../components/WhyCard"
import Socials from "../components/Socials"
import cake from '../assets/cake.jpg' 
import ProductCard from "../components/ProductCard"
import MyFooter from "../components/MyFooter"
import { useState } from "react"

export default function Home(){

    const [prodLoading, setProdLoading] = useState(false)

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    const sendTosignUp = () => {
        window.location.href = '/signup'
    };


    return(
       <main>
       <section className="hero" id="hero">
        <Nav />
        <div className="hero-cover">
        <section className="hero-top">
            <div className="text">
                <div className="heading-text">
                    <BlurText
                text="Welcome to"
                delay={150}
                animateBy="letters"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
                />
                <BlurText
                text="Lolo's"
                delay={150}
                animateBy="letters"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
                />
                </div>
                <p>The Golden Touch in Every bite</p>
                {/* <p>The best online ordering experience</p> */}
            </div>
            <Link to={'/shop'} className="b-link">Shop Now</Link>
        </section>
        </div>

       </section>

       {/* <div className="my-socials">
        <Socials></Socials>
       </div> */}
       <div className="totop">
        <a href="#hero"><img src="https://img.icons8.com/color/96/circled-up--v1.png" 
        alt="circled-up--v1"/></a>
       </div>

       <section className="why">
        <h1>Why Us?</h1>
        <div className="reasons">

            <div className="cards">
                <WhyCard 
                    sClass="chef"
                    icon={"https://img.icons8.com/color/96/cook-male--v1.png"}
                    textHead="Handcrafted Excellence" 
                    desc="Our master baker use traditional techniques and premium ingredients to create artisan-quality breads and pastries, yet we keep them affordable for your daily enjoyment."
                />
                <WhyCard 
                    icon={"https://img.icons8.com/bubbles/100/microwave.png"}
                    textHead="Oven-Fresh" 
                    desc="We bake in small batches on demand, ensuring you always get warm, fresh-from-the-oven goodness whether you visit in the morning or evening."
                />
                <WhyCard 
                    icon={'https://img.icons8.com/pulsar-color/96/vegetables-box.png'}
                    textHead="Locally Sourced & Loved" 
                    desc="We partner with local farms for our ingredients and actively support community initiatives. When you choose us, you're supporting local businesses and neighbors."
                />

            </div>

            <div className="image">
                <img src={cake} alt="Cake" />
                <p>Photo by <a 
                href="https://unsplash.com/@willecholz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Will Echols</a> on <a 
                href="https://unsplash.com/photos/sliced-chocolate-cake-beside-fork-on-plate-P_l1bJQpQF0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </p>
            </div>
        </div>
       </section>

       <section className="best">
        <h1>Our Best Sellers</h1>
        <hr />
        <hr />
        <hr />
        <div className="products">
            <ProductCard  
            loading={prodLoading}
            image={cake}
            alt='Cake'
            name='Cake Slice'
            desc='Flavourful Cake slices'
            price='MK 7, 500.00'
            />

            <ProductCard  
            loading={prodLoading}
            image={cake}
            alt='Cake'
            name='Cake Slice'
            desc='Flavourful Cake slices'
            price='MK 7, 500.00'
            />

            <ProductCard  
            loading={prodLoading}
            image={cake}
            alt='Cake'
            name='Cake Slice'
            desc='Flavourful Cake slices'
            price='MK 7, 500.00'
            />

            <div className="view-more">
                <img src="https://img.icons8.com/plasticine/100/plus.png" alt="plus"className="plus" />
                <p>See more</p>
            </div>

        </div>
       </section>
       <section class="cta">
            <h1>Want to be a Regular Customer?</h1>
            <p>Sign up and get regular discounts and share gift cards!</p>
            <button class="cta-button" onClick={sendTosignUp}>Sign Up Now</button>
        </section>
       <MyFooter />
       </main>
    )
}