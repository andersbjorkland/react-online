import { interactions } from "../configuration/interactions";

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