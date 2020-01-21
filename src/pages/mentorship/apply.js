import React from "react"
import mainStyles from "../../styles/main.module.scss"
import mentorshipStyles from "./mentorship.module.scss"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Layout from "../../components/layout"
import Head from "../../components/head"

export default class MyGatsbyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            path: props.path,
            email: "",
            message: "",
        }
    }
    _handleChange = async e => {
        this.setState({ email: e.target.value })
    }

    _handleSubmit = async e => {
        console.log("@@@@@ adding to mailchimp...", this.state.email)

        try {
            const result = await addToMailchimp(this.state.email, {
                FNAME: "Marc",
                LNAME: "Backes",
                GITHUB: "https://github.com/themarcba",
            })
            console.log("@@@@@ result", result)
            this.setState({ message: result.msg })
        } catch (error) {
            console.log("@@@@@", error.message)
        }
    }

    render() {
        return (
            <Layout>
                <Head title="Apply to mentorship" path={this.path} />
                <form className={mainStyles.card}>
                    <h1>Apply to mentorship</h1>
                    <p>
                        For me to get to know you a little better, please fill
                        out the following form:
                    </p>
                    <div className={mainStyles.formFields}>
                        <div className={mainStyles.formField}>
                            <label>
                                <span>Firstname</span>
                                <input
                                    type="text"
                                    onChange={this._handleChange.bind(this)}
                                />
                            </label>
                        </div>
                        <div className={mainStyles.formField}>
                            <label>
                                <span>Lastname</span>
                                <input
                                    type="text"
                                    onChange={this._handleChange.bind(this)}
                                />
                            </label>
                        </div>
                        <div className={mainStyles.formField}>
                            <label>
                                <span>E-mail address</span>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    onChange={this._handleChange.bind(this)}
                                />
                            </label>
                        </div>
                        <div className={mainStyles.formField}>
                            <label>
                                <span>Twitter handle</span>
                                <input
                                    type="text"
                                    placeholder="@yourhandle"
                                    onChange={this._handleChange.bind(this)}
                                />
                            </label>
                        </div>
                        <div className={mainStyles.formField}>
                            <label>
                                <span>Github URL</span>
                                <input
                                    type="text"
                                    placeholder="https://github.com/yourusername"
                                    onChange={this._handleChange.bind(this)}
                                />
                            </label>
                        </div>
                    </div>
                    <div
                        className={mainStyles.button}
                        onClick={this._handleSubmit}
                    >
                        Submit application
                    </div>
                    <div style={{ background: "yellow", color: "#000" }}>
                        {this.state.message}
                    </div>
                </form>
            </Layout>
        )
    }
}
