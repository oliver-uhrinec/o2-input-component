import { ChangeEvent, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '@/components/form/input/Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args: InputProps) => {
  const [value, setValue] = useState<string>(args.readOnly ? args.value : '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!args.readOnly) {
      setValue(event.target.value);
    }
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  label: 'Username',
  value: 'john_doe',
  placeholder: 'Enter your username...',
};

export const withDescription = Template.bind({});
withDescription.args = {
  id: 'description',
  label: 'Phone Number',
  value: '123-456-7890',
  placeholder: 'Phone Number',
  description: 'Enter your phone number in format: XXX-XXX-XXXX',
};

export const Password = Template.bind({});
Password.args = {
  id: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password...',
};

export const OptionalInput = Template.bind({});
OptionalInput.args = {
  id: 'optional',
  label: 'Middle Name',
  placeholder: 'Enter your middle name (optional)...',
  required: false,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  id: 'disabled',
  label: 'Email',
  placeholder: 'Enter your email...',
  disabled: true,
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  id: 'max-length',
  label: 'Username',
  placeholder: 'Enter your username...',
  description: 'Max length: 15 characters',
  maxLength: 15,
};

export const readOnly = Template.bind({});
readOnly.args = {
  id: 'read-only',
  label: 'Account ID',
  value: '123456789',
  placeholder: 'Read-only account ID...',
  readOnly: true,
};

export const hasError = Template.bind({});
hasError.args = {
  id: 'error',
  label: 'Email',
  value: 'invalid-email',
  placeholder: 'Enter your email...',
  error: 'Invalid email address',
};

export const hasErrorWithDescription = Template.bind({});
hasErrorWithDescription.args = {
  id: 'error-description',
  label: 'Phone Number',
  value: '1234567890',
  placeholder: 'Enter your phone number...',
  error: 'Invalid phone number',
  description: 'Format: XXX-XXX-XXXX',
};

export const hasWarning = Template.bind({});
hasWarning.args = {
  id: 'warning',
  label: 'Password',
  value: '12345',
  placeholder: 'Enter your password...',
  warning: 'Password is too weak',
};
