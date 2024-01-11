import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <section className='intro-section-in-home'>
                <Row>
                    <Col className=''>
                        <img className='home-img-01 your-shaking-component' src='/home-01.png'></img>
                    </Col>

                    <Col className='home-01-text'>
                        <div className='education-care-line'>এডুকেশন উইথ কেয়ার</div>

                        <div className='home-apnar-prosikkhok'>সেরা প্রশিক্ষকদের সাথে<br />
                            আপনার শিক্ষা টিউন করুন</div>

                        <div className='home-academic-theke-dokkhota'>একাডেমিক থেকে দক্ষতা উন্নয়নে এডুটিউন আছে আপনার শিক্ষাকে আরও সহজ করতে। শিক্ষার্থীদের গাণিতিক, মানসিক, প্রযুক্তিগত এবং ভাষাগত দক্ষতা বৃদ্ধি করে তাদেরকে চতুর্থ শিল্প বিপ্লবের একজন যোগ্য নাগরিক হিসাবে গড়ে তোলাই আমাদের প্রধান লক্ষ্য।</div>
                        <form className='form-class-home-01'>
                            <input className='w-75' placeholder='আপনার কোর্সের কি ওয়ার্ড'></input>
                            <Button className='w-25'>Search</Button>
                        </form>
                        <div className='jonopriyo-block-01'>সবচেয়ে জনপ্রিয়:</div>
                        <div className='jonopriyo-block-01'>
                            <span className='jonopriyo-course-link-01'>টেস্ট</span>
                            <span className='jonopriyo-course-link-01'>কোর্স</span>
                            <span className='jonopriyo-course-link-01'>বাচ্চাদের কোর্স</span>
                            <span className='jonopriyo-course-link-01'>মস্তিষ্কের বিকাশ</span>
                            <span className='jonopriyo-course-link-01'>পেশাদার কোর্স</span>

                        </div>

                    </Col>
                </Row>
            </section>


            <section className='home-sec-02'>
                <div className='home-ken-amara-text-02'>কেন আমাদের কোর্স নির্বাচন করবেন?</div>
                <div className='home-sekhar-jonno-sobkichu-text-02'>শেখার জন্য সবকিছু পাবেন</div>

                <div class="container text-center why-us-block-home-02">
                    <div class="row">
                        <div class="col d-flex blocks-why-us-02">
                            <img src='why-us-01.png'></img>
                            <div className='blocks-why-us-text-02'>পেশাদার এবং<br />
                                বুদ্ধিমান প্রশিক্ষক
                            </div>
                        </div>
                        <div class="col d-flex blocks-why-us-02">
                            <img src='why-us-02.png'></img>
                            <div className='blocks-why-us-text-02'>কোর্স সম্পূর্ণ হওয়ার পর<br />
                                সার্টিফিকেট
                            </div>
                        </div>
                        <div class="col d-flex blocks-why-us-02">
                            <img src='why-us-03.png'></img>
                            <div className='blocks-why-us-text-02'>বই এবং প্রয়োজনীয়<br />
                                সরঞ্জাম
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col d-flex blocks-why-us-02">
                            <img src='why-us-04.png'></img>
                            <div className='blocks-why-us-text-02'>সেরা শিক্ষা<br />
                                বিশেষজ্ঞ
                            </div>
                        </div>
                        <div class="col d-flex blocks-why-us-02">
                            <img src='why-us-05.png'></img>
                            <div className='blocks-why-us-text-02'>জুম লাইভ<br />
                                ক্লাস
                            </div>
                        </div>
                        <div class="col d-flex blocks-why-us-02">
                            <img src='why-us-06.png'></img>
                            <div className='blocks-why-us-text-02'>পরীক্ষা এবং অ্যাসাইনমেন্ট<br />
                                নিবন্ধন করুন
                            </div>
                        </div>
                    </div>
                </div>

                <div className='block-why-us-button'>
                    <Button>নিবন্ধন করুন</Button>
                </div>
            </section>

            <section className='home-sec-03'>

            </section>
        </div>
    );
};

export default Home;