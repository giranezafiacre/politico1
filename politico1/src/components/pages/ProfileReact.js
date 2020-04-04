import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import personimg from '../images/person.jpg';
import '../css/userProfile.css';

class ProfileReact extends Component {
    state = {
        selectedFile: null,
        imagePreviewUrl: personimg
    };

    fileChangedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })

        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(event.target.files[0])

    }



    render() {
        let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
        if (this.state.imagePreviewUrl) {
            $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" class="form" id="profile-image"/> </div>);
        }

        return (
            <Router><Route
                exact
                path="/userPageReact/option/ProfileReact"
                render={props => (<React.Fragment>
                    <div className="App">
                        <section>
                            <div class="profile">
                                <input type="file" id="input-file" class="form" name="avatar" onChange={this.fileChangedHandler} />
                                {$imagePreview}<br />
                                <span id="email" class="form">user-email@gmail.com</span>
                                <div id="input-file">
                                    <input id="party" class="form" type="text" value="you voted for BCDI" placeholder="name of party" disabled /><br />
                                    <input id="post" class="form" type="text" value="you voted MUNYANTABA for Emmanuel" placeholder="post" disabled /><br />
                                </div></div>
                        </section>

                    </div>
                </React.Fragment>)}
            />
            </Router>


        );
    }
}
export default ProfileReact;
