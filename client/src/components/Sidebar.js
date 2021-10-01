import React from 'react'
import { Tab, Nav } from 'react-bootstrap'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

const Sidebar = ({id}) => {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    
    return (
        <div style={{width:'250px'}} className="d-flex flex-column">
           <Tab.Container activeKey={activeKey}>
               <Nav variant="tabs" className="justify-content-center">
                   <Nav.Item>
                       <Nav.Link eventKey={CONVERSATIONS_KEY}>Converations</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                   </Nav.Item>
               </Nav>
           </Tab.Container>
        </div>
    )
}

export default Sidebar
