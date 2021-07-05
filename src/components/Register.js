import React, {useState} from 'react'
import{ Modal, Button } from 'react-bootstrap'

const Register = () => {
    const [show, setShow] = useState(false);
    return(
    <>
    <Button variant="primary" onClick={() => setShow (true)}>
      Register
    </Button>

    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <form>
      <Modal.Body>
          <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" className="form-control"/>
          </div>
          <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" className="form-control"/>
          </div>
          <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control"/>
          </div>
          <div className="form-group">
              <label>Tanggal Lahir</label>
              <input type="text" name="tanggalLahir" className="form-control"/>
          </div>
          <div className="form-group">
              <label>Gender</label>
              <input type="text" name="gender" className="form-control"/>
          </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
      </form>
    </Modal>
  </>
    )
}

export default Register
