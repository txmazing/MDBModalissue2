/* Bootstrap */
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

/* Code */
export default function Page2() {
	return (
		<MDBContainer fluid className='bg-primary pb-2'>
			<MDBContainer style={{ paddingTop: "75px" }}>
				<MDBRow className='vh-100'>
					<MDBCol>
						<h1 className='font-weight-bold py-3 text-white'>Page2</h1>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</MDBContainer>
	);
}
