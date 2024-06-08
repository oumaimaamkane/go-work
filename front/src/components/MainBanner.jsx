// import React from 'react';
import { useEffect } from 'react';
//import $ from 'jquery'; 
//import 'owl.carousel';

function MainBanner() {
    useEffect(() => {
        $('.home-slides').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }, []);
    
    return (
        <div className="home-area home-slides owl-carousel owl-theme">
            <div className="main-banner item-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <span className="sub-title">The Best Workspace in New York</span>
                                <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                <div className="btn-box">
                                    <a href="contact.html" className="default-btn">Book A Room <span></span></a>
                                    <a className="optional-btn" data-ilb2-video='{"controls":"controls", "autoplay":false, "sources":[{"src":"assets/img/video.m4v", "type":"video/mp4"}]}' data-imagelightbox="video"><i className="flaticon-play-button"></i> Watch Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-banner item-bg2">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <span className="sub-title">The Best Workspace in New York</span>
                                <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                <div className="btn-box">
                                    <a href="contact.html" className="default-btn">Book A Room <span></span></a>
                                    <a className="optional-btn" data-ilb2-video='{"controls":"controls", "autoplay":false, "sources":[{"src":"assets/img/video.m4v", "type":"video/mp4"}]}' data-imagelightbox="video"><i className="flaticon-play-button"></i> Watch Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-banner item-bg3">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <span className="sub-title">The Best Workspace in New York</span>
                                <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                <div className="btn-box">
                                    <a href="contact.html" className="default-btn">Book A Room <span></span></a>
                                    <a className="optional-btn" data-ilb2-video='{"controls":"controls", "autoplay":false, "sources":[{"src":"assets/img/video.m4v", "type":"video/mp4"}]}' data-imagelightbox="video"><i className="flaticon-play-button"></i> Watch Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;