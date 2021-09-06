import React, { useState } from "react";
import Popup from "./Popup";
import { FiShare } from "react-icons/fi";
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";


function cardSharing(props) {
    const title = props.title;
    const url = props.url;
    const username = props.username;
    const recipient = props.contactName;

    console.log('url: ', url);

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function shareHandler(){

    }

    return (
        <div>
            <FacebookShareButton quote={title} url={url} onClick={props.setSendButton}>
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
            <WhatsappShareButton title={title} url={url} separator=":: " onClick={props.setSendButton}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton
            title={title}
            url={url}
            windowWidth={750}
            windowHeight={600}
            onClick={props.setSendButton}
            >
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton
            subject={title}
            body={`Hi ${recipient},\n\n ${username} sent you a special message with Greet Now - Personal card editor, follow the link:`}
            url={url}
            >
            <EmailIcon size={32} round/>
            </EmailShareButton>
            <FiShare size={32} onClick={togglePopup}/>
            {isOpen && <Popup
            content={url}
            handleClose={togglePopup}
    />}
        </div>
    )
}

export default cardSharing
