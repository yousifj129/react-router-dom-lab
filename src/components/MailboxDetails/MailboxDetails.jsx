import { useNavigate, useParams } from "react-router"
import PageNotFound from "../PageNotFound/PageNotFound";

const MailboxDetails = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const { mailboxId } = params;
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );
    const selectedLetters = props.letters.filter((letter) => (
        letter.mailboxId == Number(mailboxId)
    ));
    return (
        <>
            {
                selectedBox ?
                    <>
                        <h1>Mailbox details</h1>
                        <h3>Box Number: {selectedBox._id}</h3>
                        <h3>Box Holder: {selectedBox.boxOwner}</h3>
                        <h3>Box Size: {selectedBox.boxSize}</h3>
                    </>
                    :
                    <PageNotFound />
            }
            {
                selectedLetters ?
                    <ul style={{display:"flex", flexDirection:"column"}}>
                        <h1>letters for this mailbox:</h1>

                        {selectedLetters.map((letter, index) => {
                            return (
                            <li key={index}>
                                <hr />
                                <h3>recipient: {letter.recipient}</h3>
                                <h3>message: {letter.message}</h3>
                            </li>)
                        })}
                    </ul>
                    :
                    <PageNotFound />
            }

        </>
    )
}

export default MailboxDetails