import { interactions } from "../configuration/config";

const INTERACTION_TIMEOUT = interactions.buttonTimeout;

const timedWrapper = () => {
    let isClicked = false;

    return (callback, timeout = INTERACTION_TIMEOUT) => {
        
        if (!isClicked) {
            isClicked = true;
            callback();

            setTimeout(() => {
                isClicked = false;
            }, timeout);
        }
        

    }
}

const timedClickHandler = timedWrapper();

export default timedClickHandler;