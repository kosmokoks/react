import React from "react"

class FormValidate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
            email: '',
            nameError: '',
            textError: '',
            emailError: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange = event => {
        this.setState({ name: event.target.value }, () => {
            this.validateName();
        });
    };

    handleTextChange = event => {
        this.setState({ text: event.target.value }, () => {
            this.validateText();
        });
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
            this.validateEmail();
        });
    };

    validateName = () => {
        const { name } = this.state;
        this.setState({
            nameError:
                name.length > 0 ? null : 'Proszę wypełnić pole'
        });
    }

    validateText = () => {
        const { text } = this.state;
        this.setState({
            textError:
                text.length > 0 ? null : 'Proszę wypełnić pole'
        });
    }

    validateEmail = () => {
        const { email } = this.state;
        this.setState({
            emailError:
                email.length > 0 ? null : 'Proszę wypełnić pole'
        });
    }

    handleSubmit(e) {
        const emailVal = this.state.email.length;
        const textVal = this.state.text.length;
        const nameVal = this.state.name.length;
        e.preventDefault();
        if (emailVal > 0 && textVal > 0 && nameVal > 0) {
            alert('wysłano pomyślnie');
        }
        else {
            alert('Wypełnij wszytskie pola');
        }
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        onBlur={this.validateName}
                        required
                    />
                    <label >Nazwa</label>
                    <div className='invalid-feedback'>{this.state.nameError}</div>
                </div>
                <div className='form-group'>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        onBlur={this.validateEmail}
                        required
                    />
                    <label>Email</label>
                    <div className='invalid-feedback'>{this.state.emailError}</div>
                </div>
                <div className='form-group'>
                    <textarea
                        type="text"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        onBlur={this.validateText}
                        required
                    />
                    <label>Wpisz wiadomość</label>
                    <div className='invalid-feedback'>{this.state.textError}</div>
                </div>
                <button type='submit' className='btn-submit'>
                    Wyślij
                    </button>
            </form >
        );
    }
}
export default FormValidate;