import React from 'react';
import '../index.css';
import pic from '../Images/atchu.jpg'

export function userProfile(props){

    const {gitHubUserName, name } = props;
    //console.log("grsgsgfs-->",props);
    //const gitHubUserName = props;
    //console.log("hhhhhhhh->",gitHubUserName);
    
    var style = {
        height: 100,
        width: 100
    };
    return(
        <div className="box">
            <div>
                <img className = "same" src={pic} alt="atch" style={style}></img>
                <div className = "title">{ name } </div>
            </div>
            <div>
                <div className = "same">GitHub</div>
                <a className = "same" href="https://github.com/aarivalagan">{gitHubUserName}</a>
            </div>
            <div>
                <div className="same">Resume</div>
                <a className="same" href="https://drive.google.com/file/d/1rPvkvKuguDaF_K8fKG0U4wltLm883jFN/view?usp=sharing">https://drive.google.com/file/d/1rPvkvKuguDaF_...</a>
            </div>
        </div>
    );
}