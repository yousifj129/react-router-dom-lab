import { Link } from "react-router"

const MailboxList = ({mailboxes}) => {
    return (
        <>
            <h1>Mailbox List</h1>

            <ul style={{display: "flex", gap:"25px"}}>
                {mailboxes.map((mailbox)=>{
                    return <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
                })}
            </ul>
        </>
    )
}

export default MailboxList