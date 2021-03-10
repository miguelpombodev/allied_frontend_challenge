import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import api from '../../services/apiConnection';

import Button from '../../components/Button';
import { Container, FormPlatform } from './styles';

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
        <div>
          {platformPlans?.map((plat) => (
            <>
              <FormControlLabel
                key={plat.sku}
                control={<Radio />}
                label={plat.aparelho ? plat.aparelho.nome : plat.sku}
                onClick={() => {
                  handleUserChoose(plat);
                }}
              />
              <span>
                <small>{plat.franquia}</small>
              </span>
            </>
          ))}
        </div>
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
