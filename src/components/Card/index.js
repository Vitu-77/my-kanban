import React from 'react';

import { Container } from './styles';

const Card = ({ data }) => {
    return (
        <Container>
            <p>{data.title}</p>
        </Container>
    )
}

export default Card;