import React from 'react';
import Layout from './components/Layout/Layout';
import Container from './components/Container/Container';
import { useLoading } from './hooks';
import Loading from './components/Shared/Loading/Loading';

function App() {

    const { loading } = useLoading()

    return (
        <Layout>
            {
                loading
                    ? <Loading />
                    : null
            }
            <Container />
        </Layout>
    );
}

export default App;
