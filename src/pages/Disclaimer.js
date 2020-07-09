import React from 'react';
import styled from 'styled-components';

import { DisplayTitle, Paragraph, Button } from '../components';
import { devices } from '../utilities';

const Disclamer = (props) => {
	return (
		<DisclamerStyled className="disclamer">
			<div className="content-wrapper">
				<DisplayTitle>Disclaimer</DisplayTitle>
				<Paragraph>
					Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC.
				</Paragraph>
				<Paragraph>
					Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera
					en aucun cas exploité à des fins commerciales et ne sera pas publié.
				</Paragraph>
				<Button textCta="Retourner à l’accueil" linkCta="/" />
			</div>
		</DisclamerStyled>
	);
};

const DisclamerStyled = styled.main`
	&.disclamer {
		margin-top: 62px;
		height: calc(100vh - 75px - 60px);

		@media ${devices.large} {
			margin-top: 80px;
		}

		h2 {
			margin: 64px 0 16px;
			text-align: center;
		}

		p {
			margin: 0 auto 16px;
			text-align: center;

			@media ${devices.large} {
				max-width: 850px;
			}
		}

		button {
			margin: 40px auto 0;
		}
	}
`;

export default Disclamer;
