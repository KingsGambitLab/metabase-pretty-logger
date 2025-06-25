import { useCallback, useState } from 'react';
import { Modal, Tappable } from '@vectord/components';
import { useSetRecoilState } from 'recoil';
import cogoToast from 'cogo-toast';

import { setCachedMetabaseSessionToken } from 'utils/cachedMetabaseSessionToken';
import Field from 'components/Field';
import Form from 'components/Form';
import Input from 'components/Input';
import metabaseApi from 'api/metabase';
import metabaseSessionState from 'atoms/metabaseSessionState';

function MetabaseLoginModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const setMetabaseSessionState = useSetRecoilState(metabaseSessionState);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      setSubmitting(true);
      try {
        const token = await metabaseApi.createSessionToken({ email, password });
        setCachedMetabaseSessionToken(token);
        setMetabaseSessionState({ isLoggedIn: true, token });
      } catch (error) {
        cogoToast.error(
          error.response?.data?.errors?.password ||
            'Failed to login. Please check your credentials',
        );
      }
      setSubmitting(false);
    },
    [email, password, setMetabaseSessionState],
  );

  return (
    <Modal
      isOpen={true}
      canClose={false}
      title="Enter Metabase Credentials"
    >
      <Form onSubmit={handleSubmit}>
        <Field
          name="email"
          label="Email address"
        >
          <Input
            required
            type="email"
            placeholder="abc@examplemail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
          />
        </Field>
        <Field
          name="password"
          label="Password"
        >
          <Input
            required
            type="password"
            placeholder="Shh..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
          />
        </Field>
        <Tappable
          type="submit"
          disabled={isSubmitting}
          component="button"
          className="btn btn-primary btn-long full-width"
        >
          Login to Metabase
        </Tappable>
      </Form>
    </Modal>
  );
}

export default MetabaseLoginModal;
