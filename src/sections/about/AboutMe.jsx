import { Row, Col, Container } from 'reactstrap';
import {Player, Controls} from '@lottiefiles/react-lottie-player';
import './about.css'

const AboutMe = () => {
    return ( 
        <Container>
            <h2 style={{fontFamily: 'Lobster', paddingTop: '5rem'}} className='text-center'>
                About Me
            </h2>
            <Row>
                <Col>
                    <Player 
                        id='lottiePlayer'
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_tno6cg2w.json"
                        style={{ height: '300px', width: '300px', float: 'left', marginRight: '50px'}}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                    <div>
                        <p id='aboutMe' style={{marginTop: '3rem'}}>I run a small crypto business and I was able to automate a lot of my work to the point where I went from working 3-5 hours a day to 1 hour a week. I created a script that ran 50 crypto transactions in 10 seconds instead of manually sending them in half an hour every single day. I also set up a telegram bot to automate management of any devices that disconnected or needed a reboot. Being able to build something using logic and math was instilled in me at 16 when I began working with my father in construction. As far as programming, I've taken a HTML/CSS/Javascript course and a Full Stack (MERN) course with Nucamp. I’m also currently enrolled in the FastTrack program I mentioned earlier and that will be completed in September.</p>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default AboutMe;