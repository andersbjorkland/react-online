import { useState } from "react";
import styled from "styled-components";
import SimpleTriangle from "../assets/SimpleTriangle";
import { mailUrl } from "../configuration/config";
import Neon from "../Layout/Neon";
import BareButton from "./BareButton";
import LoadingIndicator from "./LoadingIndicator";

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    min-height: 12rem;
    max-width: 40rem;

    margin: auto;
    margin-top: 4rem;
    padding-bottom: 4rem;

    color: var(--lightPink);

    button {
        font-weight: bold;
    }

    textarea {
        min-height: 10rem;
    }
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ContactForm = ({className}) => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const postMessage = async (data) => {
        setIsLoading(true);
        const response = await fetch(mailUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        });

        const result = await response.json();
        const isOk = response.ok;

        if (isOk) {
            setStatusMessage(result.message ?? "Message successfully sent!");
            setIsSent(true);
            setIsLoading(false);
        } else {
            setStatusMessage(result.message ?? "Message could not be sent!");
            setIsSent(false);
            setIsLoading(false);
        }

        return result;
    }

    if (isSent) {
        return (
            <Wrapper className={className ?? false}>
                <p>{statusMessage}</p>
            </Wrapper>
        );
    }

    return (
        <Wrapper className={className ?? false} onSubmit={(event) => {
                event.preventDefault();
                console.log("...submitting");

                postMessage({'email': email, 'message': message})
                    .catch(error => {
                        console.error(error);
                    });
            }
        }>
            <FlexColumn>
                <label>E-mail</label>
                <input 
                    type="email" 
                    onChange={event => setEmail(event.currentTarget.value)} 
                    value={email} 
                    required
                />
            </FlexColumn>
            <FlexColumn>
                <label>Message</label>
                <textarea 
                    onChange={event => setMessage(event.currentTarget.value)}
                    value={message}
                    required
                ></textarea>
            </FlexColumn>
            { isLoading ? (
                <LoadingIndicator className="ml-auto" />
            ) : (
                <BareButton className="ml-auto" type="submit" callback={() => null}><Neon>Send</Neon><Neon><SimpleTriangle active={true} /></Neon></BareButton>
            )}
        </Wrapper>
    );
}

export default ContactForm;