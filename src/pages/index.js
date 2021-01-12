import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.css"
import "../assets/css/templatemo-softy-pinko.css"
import {Helmet} from 'react-helmet'

const Main = ({ data }) => {
  return (
    <div>
        <Helmet>
            {/* <!-- jQuery --> */}
            <script src="assets/js/jquery-2.1.0.min.js"></script>

            {/* <!-- Bootstrap --> */}
            <script src="assets/js/popper.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>

            {/* <!-- Plugins --> */}
            <script src="assets/js/scrollreveal.min.js"></script>
            <script src="assets/js/waypoints.min.js"></script>
            <script src="assets/js/jquery.counterup.min.js"></script>
            <script src="assets/js/imgfix.min.js"></script> 
            
            {/* <!-- Global Init --> */}
            <script src="assets/js/custom.js"></script>
        </Helmet>
        {/* <!-- ***** Preloader Start ***** --> */}
        <div id="preloader">
            <div class="jumper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        {/* <!-- ***** Header Area Start ***** --> */}
        <header class="header-area header-sticky">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                            <a href="#" class="logo">
                                <img src="assets/images/logo.png" alt="Softy Pinko"/>
                            </a>
                            {/* <!-- ***** Logo End ***** --> */}
                            {/* <!-- ***** Menu Start ***** --> */}
                            <ul class="nav">
                                <li><a href="#welcome" class="active">Home</a></li>
                                <li><a href="#features">About</a></li>
                                <li><a href="#work-process">Work Process</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#pricing-plans">Pricing Tables</a></li>
                                <li><a href="#blog">Blog Entries</a></li>
                                <li><a href="#contact-us">Contact Us</a></li>
                            </ul>
                            <a class='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    {/* <!-- ***** Header Area End ***** -->   */}
    </div>
  )
}

export default Main

