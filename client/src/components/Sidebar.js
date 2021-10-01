import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import Contacts from './Contacts'
import Conversations from './Conversations'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

const Sidebar = ({id}) => {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

    return (
        <div style={{width:'250px'}} className="d-flex flex-column">
           <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
               <Nav variant="tabs" className="justify-content-center">
                   <Nav.Item>
                       <Nav.Link eventKey={CONVERSATIONS_KEY}>Converations</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                   </Nav.Item>
               </Nav>
               
               <Tab.Content className="border-end overflow-auto flex-grow-1">
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversations />
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts />
                </Tab.Pane>
               </Tab.Content>
           </Tab.Container>
        </div>
    )
}

export default Sidebar
