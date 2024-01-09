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

                    </Col>
                </Row>
            </section>
        </div>
    );
};

export default Home;