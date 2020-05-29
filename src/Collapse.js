import React from 'react';
import MenuItem from './MenuItem'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Collapse(props) {

    return (
        <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                <h2 className="text-dark">{props.menuType} <small><FontAwesomeIcon icon={faCaretDown} size="sm" className="text-dark" /></small></h2>
            </Button>
            <UncontrolledCollapse toggler="#toggler">
                <Card>
                    <CardBody>
                        <MenuItem menuType={props.menuType} count={props.count} />
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    )
};

export default Collapse;