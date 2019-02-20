import React from 'react';
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
import FormValidate from "./formValidate";
import onClickOutside from 'react-onclickoutside'

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            visible: false,
            email: false
        };
        this.closeMenu = this.closeMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleModalContact = this.handleModalContact.bind(this);
    };


    handleBtnClick() {
        console.log(this)
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }));
    }

    handleClickOutside() {
        this.setState(prevState => ({
            showMenu: false
        }));
    }

    closeMenu() {
        this.setState({
            showMenu: false
        })
    }

    handleModalContact() {
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    render() {

        let btnClass = ["btn-menu"]
        let modalElement;
        if (this.state.showMenu) {
            btnClass.push('active');
        }

        if (this.state.visible) {
            modalElement = <Modal
                visible={this.state.visible}
                width="500"
                height="400"
                effect="fadeInUp"
                onClickAway={() => this.handleModalContact()}>
                <FormValidate />
            </Modal>
        }

        return (
            <header className="navigation">
                <div className={btnClass.join(' ')} onClick={this.handleBtnClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={this.state.showMenu ? 'show' : 'hide'}>
                    <div className="exit-btn" onClick={this.handleBtnClick}>
                        <div></div>
                    </div>
                    <ul >
                        <li onClick={this.closeMenu}>
                            <Link to="/react">Home</Link>
                        </li>
                        <li onClick={this.closeMenu}>
                            <Link to="/about">O mnie</Link>
                        </li>
                        <li onClick={this.closeMenu}>
                            <a href="#" onClick={this.handleModalContact}>Kontakt</a>
                        </li>
                    </ul>
                </nav>
                {modalElement}
            </header>
        );
    }
}

export default onClickOutside(Menu);