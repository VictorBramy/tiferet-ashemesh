import React,{Component} from "react";
import {setRouteField, setScrollId, setMakeCallField, setFullNameField, setCityField,
        setAddressField, setPhoneNumberField, setEmailField, setMsgField} from '../../actions';
import {connect} from 'react-redux';

import {
    Input,
    InputGroup,
    Container,
    Row,
    Col,
    Button,
    InputGroupAddon,
    InputGroupText
  } from "reactstrap";

import ExamplesNavbar from "../Navbars/ExamplesNavbar";
import LandingPageHeader from "../Header/LandingPageHeader";
import DefaultFooter from '../Footers/DefaultFooter';
import homeIcon from '../../assets/img/home-52.svg';
import phoneIcon from '../../assets/img/phone-2.svg';

const mapStateToProps = (state) => {
  return {
    route: state.changeRoute.route,
    scrollId: state.changeScrollId.scrollId,
    makeCall: state.changeMakeCall.makeCall,
    type: state.makeContactForm.type,
    fullName: state.makeContactForm.fullName,
    city: state.makeContactForm.city,
    address: state.makeContactForm.address,
    phoneNumber: state.makeContactForm.phoneNumber,
    email: state.makeContactForm.email,
    msg: state.makeContactForm.msg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (route) => dispatch(setRouteField(route)),
    onChangeScrollID: (scrollId) => dispatch(setScrollId(scrollId)),
    onMakeCall: (makeCall) => dispatch(setMakeCallField(makeCall)),
    onFullNameChange: (event) => dispatch(setFullNameField(event.target.value)),
    onCityChange: (event) => dispatch(setCityField(event.target.value)),
    onAddressChange: (event) => dispatch(setAddressField(event.target.value)),
    onPhoneNumberChange: (event) => dispatch(setPhoneNumberField(event.target.value)),
    onEmailChange: (event) => dispatch(setEmailField(event.target.value)),
    onMsgChange: (event) => dispatch(setMsgField(event.target.value))
  }
}

class MakeCall extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      oneFocus: false,
      SecondFocus: false,
      thirdFocus: false,
      fourthFocus: false,
      fiveFocus: false,
    }
  }

  onSubmitClick = () => {
    const {type, fullName, city, address, phoneNumber, email, msg} = this.props;
    fetch('http://localhost:3000/makecall' , {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            type: type,
            fullname: fullName,
            city: city,
            address: address,
            phonenumber: phoneNumber,
            email: email,
            msg: msg,
        })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(user => {
      if (user) {
          alert(`הבקשה שלך נקלטה ${user}`);
      }
    }).catch(err => console.log(err));
}

  render() {
      const {oneFocus, SecondFocus, thirdFocus, fourthFocus, fiveFocus} = this.state;
      const {type} = this.props;
      return (
        <>
            <ExamplesNavbar />
            <LandingPageHeader />
            <div id='MakeCall' className="section section-contact-us text-center">
              <Container>
                <h2 className="title">פתיחת קריאה</h2>
                {type === 'fix' ? <p className="description">הזמנה לתיקון</p> : 
                  type === 'advice' ? <p className="description">ייעוץ חינם</p> : null}
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
                        onChange={this.onFullNameChange}
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
                        onChange={this.onCityChange}
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
                        onChange={this.onAddressChange}
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
                        onChange={this.onPhoneNumberChange}
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
                        onChange={this.onEmailChange}
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
                        onChange={this.onMsgChange}
                      ></Input>
                    </div>
                    <div className="send-button">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        size="lg"
                        onClick={this.onSubmitClick}
                      >
                        שלח קריאה
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <DefaultFooter/>
          
        </>
      );
    }   
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MakeCall);