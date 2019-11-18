import React from "react";
import axios from 'axios';

class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            poster: "",
            comment: "",
            postMessage: '',
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
    this.setState({
        [e.target.name]: e.target.value,
    });
    }

    submitForm(e) {
        e.preventDefault();

        axios.post('https://post-a-form.herokuapp.com/api/movies', {
            title: this.state.title,
            poster: this.state.poster,
            comment: this.state.comment,
        })
        .then(res => {
            this.setState({
                postMessage: res.statusText
            })
        })
        .catch(err => {
            this.setState({
                postMessage: 'failed response'
            })
        })

    };

    render() {
        return (
            <div className="formMovie">
                <h1>Enter your favourite movie</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                            <label htmlFor="title">Name of the film</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.lastname}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Url to film poster</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.firstname}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Enter a comment</label>
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.email}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Submit" />
                        </div>
                    </fieldset>
                </form>
                <span>{this.state.postMessage}</span>
            </div>
        );
    }
}

export default FormMovie;
