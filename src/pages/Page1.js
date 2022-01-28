/* Bootstrap */
import {
	MDBBtn,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBModal,
	MDBModalContent,
	MDBModalDialog,
	MDBModalFooter,
	MDBRow,
} from "mdb-react-ui-kit";
/* React */
import { useState } from "react";
import { Link } from "react-router-dom";

/* Code */
export default function Page1() {
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);

	return (
		<>
			<MDBContainer fluid className='bg-primary text-white'>
				<MDBContainer style={{ paddingTop: "75px" }}>
					<MDBRow>
						<MDBCol className='pt-3'>
							<MDBRow className='my-4'>
								<MDBCol>
									<MDBBtn
										className='rounded-pill fw-bold'
										color='secondary'
										onClick={toggleModal}
									>
										To Page2
									</MDBBtn>
								</MDBCol>
							</MDBRow>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBContainer>

			<MDBModal show={modal} setShow={setModal} tabIndex='-1'>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalFooter>
							<Link to='/page2'>
								<MDBBtn
									className='rounded-pill fw-bold'
									color='primary'
									onClick={toggleModal}
								>
									To Page2
									<MDBIcon icon='angle-right' className='ms-3' />
								</MDBBtn>
							</Link>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
}
