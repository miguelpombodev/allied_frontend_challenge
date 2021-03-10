import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import api from '../../services/apiConnection';

import Button from '../../components/Button';

import { Container, FormPlatform } from './styles';

interface PlatformsAPIData {
  plataformas: PlatformsAttributes[];
}

interface PlatformsAttributes {
  sku: string;
  nome: string;
  descricao: string;
}

const Main: React.FC = () => {
  const [platformsOptions, setPlatforms] = useState<PlatformsAttributes[]>();
  const [userChoose, setUserChoose] = useState<string>();

  useEffect(() => {
    async function getPlatforms(): Promise<void> {
      const { data } = await api.get<PlatformsAPIData>('plataformas');

      setPlatforms(data.plataformas);
    }

    getPlatforms();
  }, []);

  const handleUserChoose = useCallback((value: string) => {
    setUserChoose(value);
  }, []);

  return (
    <Container>
      <FormPlatform>
        <div>
          {platformsOptions?.map((plat) => (
            <>
              <FormControlLabel
                key={plat.sku}
                control={<Radio />}
                label={plat.nome}
                onClick={() => {
                  handleUserChoose(plat.sku);
                }}
              />
              <span>
                <small>{plat.descricao}</small>
              </span>
            </>
          ))}
        </div>
      </FormPlatform>
      {!userChoose ? (
        <Button variant="contained" disabled>
          Próximo
        </Button>
      ) : (
        <Link to={`/FormPlatformPlans/${userChoose}`}>
          <Button variant="contained" color="secondary">
            Próximo
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default Main;
