import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import api from '../../services/apiConnection';

import Button from '../../components/Button';
import { Container, FormPlatform, RadioOptions } from './styles';

import {
  ParamsAttribute,
  PlatformPlansAPIData,
  PlatformsPlansAttributes,
  UserChoose,
} from './interfacesFormPlatformPlans';

const FormPlatformPlans: React.FC = () => {
  const [platformPlans, setPlatformPlans] = useState<
    PlatformsPlansAttributes[]
  >();
  const [userChoose, setUserChoose] = useState<UserChoose>();
  const { planName } = useParams<ParamsAttribute>();

  useEffect(() => {
    async function getPlans(): Promise<void> {
      const { data } = await api.get<PlatformPlansAPIData>(
        `planos/${planName}`
      );
      setPlatformPlans(data.planos);
    }

    getPlans();
  }, []);

  const handleUserChoose = useCallback((value: PlatformsPlansAttributes) => {
    const productChosen = { ...value, planName };
    setUserChoose(productChosen);
  }, []);

  return (
    <Container>
      <FormPlatform>
        <RadioGroup>
          {platformPlans?.map((plat) => (
            <RadioOptions key={plat.sku}>
              <FormControlLabel
                control={<Radio />}
                value={plat.sku}
                label={plat.aparelho ? plat.aparelho.nome : plat.sku}
                onClick={() => {
                  handleUserChoose(plat);
                }}
              />
              <div key={plat.franquia}>
                <span>
                  <p>Franquia:</p> <p>{plat.franquia}</p>
                </span>
                <span>
                  <p>Valor:</p> <p> {` R$:${plat.valor}`}</p>
                </span>
                {plat.aparelho ? (
                  <>
                    <span>
                      <p>Valor do Material: </p>{' '}
                      <p> {` R$:${plat.aparelho.valor}`}</p>
                    </span>
                    {plat.aparelho.valorParcela ? (
                      <span>
                        <p>Parcelas: </p>{' '}
                        <p> {` R$:${plat.aparelho.valorParcela}`}</p>
                      </span>
                    ) : null}
                  </>
                ) : null}
              </div>
            </RadioOptions>
          ))}
        </RadioGroup>
      </FormPlatform>
      {!userChoose ? (
        <Button disabled>Próximo</Button>
      ) : (
        <Link
          to={{
            pathname: `/UserForm/${userChoose}`,
            state: userChoose,
          }}
        >
          <Button disabled={false}>Próximo</Button>
        </Link>
      )}
    </Container>
  );
};

export default FormPlatformPlans;
