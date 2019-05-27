import React, { Component } from 'react';

import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    renderButtons() {
        if (this.state.name && this.state.email && this.state.message) {
            return (
                <Button
                    label="Submit"
                    type="submit"
                    form="form1"
                    value="Send"
                    accent
                    style={{ margin: '20px 45% 0% 45%', width: '10%' }}
                />
            );
        }

        return <Button label="Submit" accent style={{ margin: '20px 45% 0% 45%', width: '10%' }} />;
    }

    render() {
        return (
            <div style={{ margin: '0% 0% 0% 0%', backgroundImage: 'url(/static/img-3.jpg)' }}>
                <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
                <form
                    action="https://formspree.io/timg51237@gmail.com"
                    method="POST"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                    id="form1"
                >
                    <FormField label="Name" size="medium" help="Required">
                        <input
                            style={{
                                fontWeight: 'lighter'
                                //border: 'none'
                            }}
                            type="text"
                            name="name"
                            onChange={event => this.setState({ name: event.target.value })}
                        />
                    </FormField>
                    <FormField label="Email Address" size="medium" help="Required">
                        <input
                            style={{
                                fontWeight: 'lighter',
                                border: 'none'
                            }}
                            type="email"
                            name="email"
                            onChange={event => this.setState({ email: event.target.value })}
                        />
                    </FormField>

                    <FormField label="Message" size="large" help="Required">
                        <textarea
                            style={{
                                fontWeight: 'lighter',
                                height: '60%',
                                resize: 'none',
                                border: 'none'
                            }}
                            type="text"
                            placeholder="Message"
                            name="message"
                            rows={10}
                            onChange={event => this.setState({ message: event.target.value })}
                        />
                    </FormField>
                </form>
                {this.renderButtons()}
            </div>
        );
    }
}

export default Contact;
