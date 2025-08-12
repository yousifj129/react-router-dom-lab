import { useState } from "react"
import { useNavigate } from "react-router"

const MailboxForm = ({mailboxes, addBox}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        _id: mailboxes.length + 1,
        boxSize: 'Small',
        boxOwner: ''
    })

    const handleSubmit = (event) =>{
        event.preventDefault()
        addBox(formData)
        navigate('/mailboxes')
    }
    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]:event.target.value})
    }
    return (
        <>
            <h1>New Mailbox</h1>


            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a boxholder</label>
                <input type="text" name="boxOwner" id="boxOwner" onChange={handleChange} value={formData.boxOwner}/>
                <label htmlFor="boxOwner">Enter a boxholder</label>
                <select name="boxSize" id="boxSize" onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <input type="submit" value="submit" />
            </form>
        </>
    )
}

export default MailboxForm