import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import api from '../../services/apiConnection';

import Button from '../../components/Button';

import {
  Container,
  FormPlatform,
  RadioOptions,
  Content,
  SavedUsers,
  UserInfos,
} from './styles';

import { PlatformsAPIData, PlatformsAttributes } from './interfacesMain';

import { UsersSavedContext } from '../../context/UsersSaved';

const Main: React.FC = () => {
  const [platformsOptions, setPlatforms] = useState<PlatformsAttributes[]>();
  const [userChoose, setUserChoose] = useState<string>();
  const { usersSaved } = useContext(UsersSavedContext);

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
    <>
      <Container>
        <FormPlatform>
          <RadioGroup>
            {platformsOptions?.map((plat) => (
              <RadioOptions key={plat.sku}>
                <FormControlLabel
                  value={plat.sku}
                  control={<Radio />}
                  label={plat.nome}
                  onClick={() => {
                    handleUserChoose(plat.sku);
                  }}
                />
                <div>
                  <span key={plat.nome}>
                    <p>{plat.descricao}</p>
                  </span>
                </div>
              </RadioOptions>
            ))}
          </RadioGroup>
        </FormPlatform>
        {!userChoose ? (
          <Button disabled>Próximo</Button>
        ) : (
          <Link to={`/FormPlatformPlans/${userChoose}`}>
            <Button disabled={false}>Próximo</Button>
          </Link>
        )}
      </Container>
      <Content>
        <h2>Usuários Salvos</h2>
        <SavedUsers>
          {usersSaved.map((user) => (
            <UserInfos key={user.sku}>
              <p>{`Nome: ${user.userData.nomeUsuario}`}</p>
              <p>{`CPF: ${user.userData.cpfUsuario}`}</p>
              <p>{`SKU: ${user.sku}`}</p>
              <p>{`Nome do Plano: ${user.planName}`}</p>
            </UserInfos>
          ))}
        </SavedUsers>
      </Content>
    </>
  );
};

export default Main;
