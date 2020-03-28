import React,{Component} from "react";
import 'aos';
import {setRouteField, setScrollId, setMakeCallField, setTypeField} from '../../actions';
import {connect} from 'react-redux';

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../Navbars/ExamplesNavbar";
import LandingPageHeader from "../Header/LandingPageHeader";
import Gallery from "../Gallery/Gallery";
import DefaultFooter from '../Footers/DefaultFooter';
import homeIcon from '../../assets/img/home-52.svg';
import phoneIcon from '../../assets/img/phone-2.svg';

const mapStateToProps = (state) => {
  return {
    route: state.changeRoute.route,
    scrollId: state.changeScrollId.scrollId,
    makeCall: state.changeMakeCall.makeCall,
    type: state.makeContactForm.type,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (route) => dispatch(setRouteField(route)),
    onChangeScrollID: (scrollId) => dispatch(setScrollId(scrollId)),
    onMakeCall: (makeCall) => dispatch(setMakeCallField(makeCall)),
    onTypeChange: (event) => dispatch(setTypeField(event))
  }
}

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      oneFocus: false,
      SecondFocus: false,
      thirdFocus: false,
      fourthFocus: false,
      fiveFocus: false
    }
  }
  componentDidMount() {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
  }

  componentWillUnmount() {
    document.body.classList.remove("landing-page");
    document.body.classList.remove("sidebar-collapse");
  }
  render() {
    const {onRouteChange, onTypeChange} = this.props;
    const {oneFocus, SecondFocus, thirdFocus, fourthFocus, fiveFocus} = this.state;
    return (
      <>
        <ExamplesNavbar/>
        <div className="wrapper">
          <LandingPageHeader />
          <div id='About' className="section section-about-us">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" >
                  <br></br><br></br><br></br>
                  <img
                  alt='About'
                  src='https://cdn-cms.f-static.com/uploads/2386773/800_5d38bdbd00974.jpg'
                  width='80%' height='60%'
                  >
                  </img>
                </Col>
                <Col className="ml-auto mr-auto text-center" width='40%' height='20%'>
                  <h2 className="title" >אודות החברה</h2>
                  <h5 className="description" >
                    תפארת השמש
                    בהנהלת האחים רוני וערן בראמי<br></br>
                    עם יותר מ-40 שנות ניסיון, 
                    בתחום דודי השמש ומערכות סולריות ,<br></br>
                    פתרונות חימום ומערכות מים למגזר הפרטי והעסקי<br></br> 
                    עם צוות מקצועי ומיומן ושירות אדיב ומסור
                  </h5>
                </Col>
              </Row>
              <div className="separator separator-primary"></div>
              <div id='Services' className="section-story-overview">
                <h1> השירותים שלנו</h1>
                  <Row>
                  <Col width='30%'>
                      <div className="team-player">
                        <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src="http://images7.webydo.com/90/9002242/3958%2F1a92e619-8a18-4ad4-a372-d3d6c3d43442.png"
                          width='90%'
                        ></img>
                        <h4 className="title">הזמנה לתיקון</h4>
                        <p className="description">
                        רוצים להתחדש בדוד שמש איכותי?
                        התקשרו אלינו ונשמח לייעץ, להכווין ולהתקין עבורכם את הדוד החדש
                        עוברים לדירה חדשה? אנחנו כאן כדי לעזור לכם לבחור את הדוד המושלם עבורכם!
                        הדוד הקודם התקלקל? אנחנו כאן כדי להתקין לכם את החדש!
                        התקשרו עוד היום וקבלו שירות מקצועי, אמין ואדיב במחירים לכל כיס! 
                        תפארת השמש 08-675-2845                      </p>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={async()=> {
                            await onRouteChange('makecall'); 
                            await onTypeChange('fix');
                            }
                          }
                        >
                          <i className='fab'>בחר</i>
                        </Button>
                      </div>
                    </Col>
                    <Col width='50%'>
                      <div className="team-player">
                        <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src="https://www.ami.org.il/media/1895/%D7%99%D7%93%D7%99%D7%93%D7%99-%D7%A0%D7%A4%D7%A9.jpg"
                          width='125%'
                        ></img>
                        <h4 className="title">ייעוץ חינם</h4>
                        <p className="description">
                        ייעוץ טלפוני חינם <br/>
                        בכל הנושאים הקשורים בתחום דודי השמש <br/>
                        ומערכות סולריות ,<br/>
                        פתרונות חימום<br/>
                        ומערכות מים למגזר הפרטי והעסקי<br/>
                        </p>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={async()=> {
                            await onRouteChange('makecall'); 
                            await onTypeChange('advice');
                            }
                          }
                        >
                          <i className="fab">בחר</i>
                        </Button>
                      </div>
                    </Col>
                    
                  </Row>  
              </div>
            </Container>
          </div>
          <div id='Stuff' className="section text-center">
            <Container>
              <h2 className="title">הצוות המקצועי</h2>
              <div className="team">
                <Row>
                  <Col width='50%'>
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src="https://cdn-cms.f-static.com/uploads/2386773/800_5d38c0b0ed522.jpg"
                        width='50%'
                      ></img>
                      <h4 className="title">רוני בראמי</h4>
                      <p className="category text-info">בעלים</p>
                    </div>
                  </Col>
                  <Col width='50%'>
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src="https://cdn-cms.f-static.com/uploads/2386773/800_5d38c0c21130f.jpg"
                        width='85%'
                      ></img>
                      <h4 className="title">ערן בראמי</h4>
                      <p className="category text-info">בעלים</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div id='Gallery'>
            <Gallery></Gallery>
          </div>
          <div id='Contacts' className="section section-contact-us text-center">
            <Container>
              <h2 className="title">צור איתינו קשר</h2>
              <p className="description">נשמח לשמוע ממך</p>
              <Row className='tr'>
                <Col className="text-right ml-auto mr-auto" lg="6" md="8">
                  <InputGroup
                    className={
                      "input-lg" + (oneFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="שם מלא"
                      type="text"
                      onFocus={() => this.setState({oneFocus: true})}
                      onBlur={() => this.setState({oneFocus: false})}
                      className='tr'
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "input-lg" + (SecondFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <img alt='City' src={homeIcon} ></img>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="עיר מגורים"
                      type="text"
                      onFocus={() => this.setState({SecondFocus: true})}
                      onBlur={() => this.setState({SecondFocus: false})}
                      className='tr'
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "input-lg" + (thirdFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <img alt='Address' src={homeIcon} ></img>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="כתובת"
                      type="text"
                      onFocus={() => this.setState({thirdFocus: true})}
                      onBlur={() => this.setState({thirdFocus: false})}
                      className='tr'
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "input-lg" + (fourthFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <img alt='PhoneNumber' src={phoneIcon} ></img>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="מספר פלאפון"
                      type="int"
                      onFocus={() => this.setState({fourthFocus: true})}
                      onBlur={() => this.setState({fourthFocus: false})}
                      className='tr'
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "input-lg" + (fiveFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="אימייל"
                      type="email"
                      onFocus={() => this.setState({fiveFocus: true})}
                      onBlur={() => this.setState({fiveFocus: false})}
                      className='tr'
                    ></Input>
                  </InputGroup>
                  <div className="textarea-container">
                    <Input
                      cols="80"
                      name="name"
                      placeholder="תוכן ההודעה"
                      rows="4"
                      type="textarea"
                      className='tr'
                    ></Input>
                  </div>
                  <div className="send-button">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      שלח קריאה
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <DefaultFooter />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
