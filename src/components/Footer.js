/* Bootstrap */
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdb-react-ui-kit";
/* React */
import { Link } from "react-router-dom";

/* Code */
export default function Footer() {
	return (
		<>
			<MDBFooter bgColor='secondary-brighter' className='text-white'>
				<MDBContainer className='py-4'>
					<MDBRow>
						<MDBCol>
							<h5>Placeholder</h5>
							<ul className='list-unstyled'>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
							</ul>
						</MDBCol>
						<MDBCol>
							<h5>Placeholder</h5>
							<ul className='list-unstyled'>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
								<li>
									<Link to='/' className='text-white'>
										Placeholder
									</Link>
								</li>
							</ul>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBFooter>
		</>
	);
}
