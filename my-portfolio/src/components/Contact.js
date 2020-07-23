import React from "react";
import './Contact.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form className='formulaire'
                onSubmit={this.submitForm}
                action="https://formspree.io/xgenryol"
                method="POST">
                    <div id="Contact"> </div>
                    <h2>Me Contacter</h2>

                <label className='titre'>Nom: </label>
                <input className='form-info' type="nom" name="nom" />
                
                <label className='titre'>Prénom: </label>
                <input className='form-info' type="prénom" name="prénom" />
                
                <label className='titre'>Email:</label>
                <input className='form-info' type="email" name="email" />

                <label className='titrem'>Message:</label>
    
                <textarea className='form-message' type="text" name="message" />
                {status === "SUCCESS" ? <p>Merci !</p> : <button className='envoyer'>Envoyer </button>}
                {status === "ERROR" && <p>Ooops! Il y a une erreur.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}