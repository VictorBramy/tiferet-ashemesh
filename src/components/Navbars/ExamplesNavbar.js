import React,{Component} from "react";
import animateScrollTo from 'animated-scroll-to';
import {setRouteField, setScrollId} from '../../actions';
import {connect} from 'react-redux';

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

const mapStateToProps = (state) => {
  return {
    route: state.changeRoute.route,
    scrollId: state.changeScrollId.scrollId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (route) => dispatch(setRouteField(route)),
    onChangeScrollID: (scrollId) => dispatch(setScrollId(scrollId))
  }
}

class ExamplesNavbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrollID : '',
      navbarColor : 'navbar-transparent',
      collapseOpen : false,
    }
  }

  componentDidMount() {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        this.setState({navbarColor:""});
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        this.setState({navbarColor:'navbar-transparent'});
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateNavbarColor);
  };

  onClickNav = async(route, scrollID) => {
    await this.props.onRouteChange(route);
    await this.props.onChangeScrollID(scrollID);
    await this.changeRoute();
  };

  changeRoute = () => {
    const {scrollId} = this.props;
    animateScrollTo(document.getElementById(scrollId))
  };

  render(){
    const {collapseOpen,navbarColor} = this.state;
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            this.setState({collapseOpen:false});
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="dark">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown" className='tr'>
              <DropdownItem header tag="a">
                סירטונים ותמונות גלריה
              </DropdownItem>
              <DropdownItem  onClick={e => e.preventDefault()}>
                תמונות
              </DropdownItem>
              <DropdownItem  onClick={e => e.preventDefault()}>
                סירטונים
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://www.linkedin.com/in/victor-bramy-17876b162/"
              target="_blank"
              id="navbar-brand"
            >
              Credits
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed and Coded by Victor-Bramy.
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                this.setState({collapseOpen:!collapseOpen});
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                onClick={() => this.onClickNav('landingpage', 'Contacts')}
                className='pointer'>
                  צור קשר
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                onClick={() => this.onClickNav('landingpage', 'Gallery')}
                className='pointer'>
                  גלרייה
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                onClick={() => this.onClickNav('landingpage', 'Stuff')}
                className='pointer'>
                  צוות המקצועי
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>  
                  מיקום
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                onClick={() => this.onClickNav('landingpage', 'Services')}
                className='pointer'>
                  שירותים
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
                onClick={() => this.onClickNav('landingpage', 'About')}
                className='pointer'>
                  אודות
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/tiferethashemesh/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  עקוב אחרינו בפייסבוק
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplesNavbar);
