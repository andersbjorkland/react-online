import { interactions } from "../configuration/config";

const INTERACTION_TIMEOUT = interactions.buttonTimeout;

const timedWrapper = () => {
    let isClicked = false;

    return (callback) => {
        
        if (!isClicked) {
            isClicked = true;
            callback();

            setTimeout(() => {
                isClicked = false;
            }, INTERACTION_TIMEOUT);
        }
        

    }
}

const timedClickHandler = timedWrapper();

export default timedClickHandler;